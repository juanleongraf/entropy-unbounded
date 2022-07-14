//se puede iniciar y cerrar sesion con el mismo boton
//si se cierra sesion se borra el localStorage (informacion de usuario y carrito)
//se pueden agregar productos al carrito desde el boton agregar o sumando desde el mismo carrito
//poner el contador del item en el carrito en 0 lo remueve del carrito
//falta agregar un metodo de filtrado para solo mostrar remeras, buzos o pantalones y
//ese filtro tambien debe funcionar si se accede desde el home a "remeras" "buzos" o "pantalones"

//sweetalert2 para todos los alerts

const productos = [];
let filter = document.getElementById('filter');
let filterValue = 'todo';
let sort = document.getElementById('sort');
let sortValue = 'predeterminado';
let cartContainer = document.getElementById('cartContainer');
let subtotal = document.getElementById('subtotal');
let totalItemsEl = document.getElementById('carrito');
let checkoutEl = document.getElementById('checkout');
let remover = false;
let rememberid = 0;
let totalnum = JSON.parse(localStorage.getItem("totalStorage")) || 0;

let cart = JSON.parse(localStorage.getItem("cartStorage")) || [];
updateCart();

//para mostrar imagen que indique el filtro
let filterTextContainer = document.getElementById('filterTextContainer');

//para mostrar todos los productos en el html
let productosContainer = document.getElementById('productosContainer');

// peticion para obtener la lista de productos y luego mostrarlos en mi html
fetch('../json/productlist.json')
    .then(response => response.json())
    .then(producto => {
        producto.forEach(producto => {
            //muestra todos los productos en el html      
                let card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('bg-color-60');
                card.classList.add('product--card');
                card.classList.add('box-shadow');
                card.classList.add('translate-on-hover');
            
                card.innerHTML = `<div class="product--card__img">
                                    <img src="${producto.url}" alt="${producto.nombre}">
                                    <p class="color-60 bg-color-30 precio">$${producto.precio}</p>
                                </div>
                                <div class="product--card__data">
                                    <div>
                                        <h3 class="color-30">${producto.nombre}</h3>
                                        <h4 class="color-30">${producto.color}</h4>
                                    </div>
                                    <button class="btn btn-color-30 alcarro" id="addToCart(${producto.id})" onclick="addToCart(${producto.id})">Al carrito</button>
                                </div>`;
                productosContainer.append(card);
        })
    })



//agregando parte del indicador de filtrado
filterTextContainer.innerHTML = `<img src="../assets/structure/todo.svg" alt="Todo" class="productos__vertical--label">`

//agrega producto al carrito
function addToCart(id) {

    //si el producto ya esta en el carrito
    if (cart.some((item) => item.id == id)) {
        //suma 1 al mult del producto
        changeMult('plus', id);
    }
    //si el producto no esta en el carrito
    else {

        //agrega el producto nuevo al carrito
        const item = productos.find((productos) => productos.id == id);
        cart.push({
            ...item,
            mult: 1
        });
        let letter;
        if (item.tipo == 'tshirt') {
            letter = 'a'
        } else letter = 'o';
        Swal.fire({
            position: 'bottom',
            html: `<span>${item.nombre} agregad${letter} al carrito</span>`,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            backdrop: false,
        })
    }
    updateCart();
}

//actualiza el carrito mostrando el total y guardando en localStorage
function updateCart() {
    renderCartItems();
    renderSuma();

    //localStorage
    localStorage.setItem("cartStorage", JSON.stringify(cart))
}

//muestra el subtotal y cantidad de prodctos
function renderSuma() {
    let total = 0, totalItems = 0;
    cart.forEach((item) => {
        total += item.precio * item.mult;
        totalItems += item.mult
    });

    //guarda en localStorage
    totalnum = total;
    localStorage.setItem("totalStorage", JSON.stringify(totalnum))
    subtotal.innerHTML = `<span class="cart__suma__number">Subtotal: $${total}</span>`
    totalItemsEl.innerHTML = `Carrito <span>${totalItems}</span>`

}

//muestra todos los productos agregados en el carrito, con su cantidad (mult)
function renderCartItems() {
    cartContainer.innerHTML = "";
    cart.forEach((item) => {
        cartContainer.innerHTML += `<div class="autogrid" id="cartItem1">
                                        <div class="productName">
                                            <div class="cart__img">
                                                <img class="miniImg" src="${item.url}" alt="${item.nombre}">
                                            </div>
                                            <span>${item.nombre} ${item.color}</span>
                                        </div>
                                        <span class="price">${item.precio}</span>
                                        <span class="mult"><button class="substract" onclick="changeMult('minus',${item.id})">-</button>${item.mult}<button class="add" onclick="changeMult('plus',${item.id})">+</button></span>
                                    </div>`
    })
}

//funcion para sumar o restar el mult de cada item desde el carrito
function changeMult(op, id) {
    cart = cart.map((item) => {

        let mult = item.mult;

        if (item.id == id) {
            if (op == 'minus' && mult > 0) {
                mult--;
                if (mult == 0) {
                    remover = true;
                    rememberid = id;
                }
            } else if (op == 'plus' && mult < item.stock) {
                mult++;
            } else {
                Swal.fire({
                    position: 'bottom',
                    html: `<span>No queda más stock de ${item.nombre}</span>`,
                    showConfirmButton: false,
                    timer: 1500,
                    backdrop: false
                })
            }
        }
        return {
            ...item,
            mult,
        };
    });
    updateCart();

    //elimina del carrito el item si tiene mult = 0
    if (remover) {
        removeFromCart(rememberid)
        remover = false;
    }
    updateCart();

}

//sacar productos del carrito --->
//cuando el contador del item llega a 0
function removeFromCart(id) {
    cart = cart.filter((item) => item.id != id);
    updateCart();
}

//vaciador de carrito
function clearStorage() {
    cart = [];
    updateCart();
}

//checkout
checkoutEl.innerHTML = `<button onclick="checkout()">checkout</button>`
function checkout() {
    if (totalnum > 0) {

        Swal.fire({
            position: 'center',
            html: `<span>El total es $${totalnum}. ¿Desea abonar en cuotas?</span>`,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No',
            confirmButtonColor: '#e29f29',
            cancelButtonColor: '#0e1213',
            backdrop: true,
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                cuotas(totalnum);
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Gracias por su compra',
                    text: `El total es entonces $${totalnum}.`,
                    footer: `Será redirigido para abonar.`,
                    showConfirmButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#e29f29',
                    backdrop: true,
                    allowOutsideClick: true
                })
                clearStorage();
            }
        })
    }
}

//funcion para tomar el total y dividirlo en cuotas, con sus recargos

async function cuotas(subtotal) {
    keep = true;
    let ncuotas = 0;
    let cuotas3 = {
        totCtas: ((110 * totalnum) / 100).toFixed(2),
        valorCtas: (((110 * totalnum) / 100) / 3).toFixed(2)
    }
    let cuotas6 = {
        totCtas: ((120 * totalnum) / 100).toFixed(2),
        valorCtas: (((120 * totalnum) / 100) / 6).toFixed(2)
    }
    let cuotas12 = {
        totCtas: ((140 * totalnum) / 100).toFixed(2),
        valorCtas: (((140 * totalnum) / 100) / 12).toFixed(2)
    }

    const { value: cuotasChoice } = await Swal.fire({
        position: 'center',
        html: `<span>¿En cuántas cuotas desea abonar?</span>`,
        input: 'select',
        inputOptions: {
            tres: `3 cuotas de $${cuotas3.valorCtas} (total: $${cuotas3.totCtas})`,
            seis: `6 cuotas de $${cuotas6.valorCtas} (total: $${cuotas6.totCtas})`,
            doce: `12 cuotas de $${cuotas12.valorCtas} (total: $${cuotas12.totCtas})`
        },
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        confirmButtonColor: '#e29f29',
        cancelButtonColor: '#0e1213',
        backdrop: true,
        allowOutsideClick: false
    })
    switch (cuotasChoice) {
        case ('tres'):
            Swal.fire({
                icon: 'success',
                title: 'Gracias por su compra',
                text: `El total es ${cuotas3.totCtas}, a pagar en 3 cuotas de ${cuotas3.valorCtas}.`,
                footer: `Será redirigido para abonar.`
            });
            clearStorage();
            break;
        case ('seis'):
            Swal.fire({
                icon: 'success',
                title: 'Gracias por su compra',
                text: `El total es ${cuotas6.totCtas}, a pagar en 3 cuotas de ${cuotas6.valorCtas}.`,
                footer: `Será redirigido para abonar.`
            });
            clearStorage();
            break;
        case ('doce'):
            Swal.fire({
                icon: 'success',
                title: 'Gracias por su compra',
                text: `El total es ${cuotas12.totCtas}, a pagar en 3 cuotas de ${cuotas12.valorCtas}.`,
                footer: `Será redirigido para abonar.`
            });
            clearStorage();
            break;
    }
}
