//se puede iniciar y cerrar sesion con el mismo boton
//si se cierra sesion se borra el localStorage
//se pueden agregar productos al carrito desde el boton agregar o sumando desde el mismo carrito
//poner el contador del item en el carrito en 0 lo remueve del carrito
//falta agregar un metodo de filtrado para solo mostrar remeras, buzos o pantalones
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

//constructor de productos
function productBones(id, tipo, nombre, color, url, precio, stock) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.color = color;
    this.url = url;
    this.precio = precio;
    this.stock = stock;
}

//remeras
productos.push(new productBones('01', 'tshirt', 'Remera Kelvin', 'blanca', '../assets/img/productos/remeras/remera-1.jpg', 3200, 100));
productos.push(new productBones('02', 'tshirt', 'Remera Chaos', 'beige', '../assets/img/productos/remeras/remera-2.jpg', 3500, 50));
productos.push(new productBones('03', 'tshirt', 'Remera Matter', 'azul marino', '../assets/img/productos/remeras/remera-3.jpg', 3300, 10));
productos.push(new productBones('04', 'tshirt', 'Remera Disorder', 'amarilla', '../assets/img/productos/remeras/remera-4.jpg', 3100, 3));
productos.push(new productBones('05', 'tshirt', 'Remera Energy', 'violeta', '../assets/img/productos/remeras/remera-5.jpg', 3300, 80));
productos.push(new productBones('06', 'tshirt', 'Remera Force', 'verde militar', '../assets/img/productos/remeras/remera-6.jpg', 3000, 12));
productos.push(new productBones('07', 'tshirt', 'Remera Disrupt', 'rosa', '../assets/img/productos/remeras/remera-7.jpg', 4300, 10));
productos.push(new productBones('08', 'tshirt', 'Remera Impulse', 'naranja', '../assets/img/productos/remeras/remera-8.jpg', 4700, 5));
productos.push(new productBones('09', 'tshirt', 'Remera Momentum', 'negra', '../assets/img/productos/remeras/remera-9.jpg', 3600, 1));

//buzos
productos.push(new productBones('10', 'buzo', 'Buzo Albert', 'verde militar', '../assets/img/productos/buzos/buzo-albert.jpg', 5000, 5));
productos.push(new productBones('11', 'buzo', 'Buzo Nikola', 'negro', '../assets/img/productos/buzos/buzo-nikola.jpg', 4800, 10));
productos.push(new productBones('12', 'buzo', 'Buzo Isaac', 'camel oscuro', '../assets/img/productos/buzos/buzo-isaac.jpg', 4900, 3));
productos.push(new productBones('13', 'buzo', 'Buzo Ludwig', 'blanco', '../assets/img/productos/buzos/buzo-ludwig.jpg', 4300, 5));
productos.push(new productBones('14', 'buzo', 'Buzo Rankine', 'celeste', '../assets/img/productos/buzos/buzo-rankine.jpg', 4700, 4));
productos.push(new productBones('15', 'buzo', 'Buzo Rudolf', 'arena', '../assets/img/productos/buzos/buzo-rudolf.jpg', 3600, 102));


//pantalones
productos.push(new productBones('16', 'pant', 'Jogger Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.jpg', 5000, 10));
productos.push(new productBones('17', 'pant', 'Jogger Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.jpg', 4800, 5));
productos.push(new productBones('18', 'pant', 'Jogger Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.jpg', 4900, 4));
productos.push(new productBones('19', 'pant', 'Jogger Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.jpg', 4300, 3));
productos.push(new productBones('20', 'pant', 'Jogger Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.jpg', 4700, 4));
productos.push(new productBones('21', 'pant', 'Jogging Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.jpg', 3600, 1));
productos.push(new productBones('22', 'pant', 'Jogger Kelvin Clain test long text', 'violeta', '../assets/img/productos/pantalones/jogger-kelvin-clain.jpg', 6900, 10));
productos.push(new productBones('23', 'pant', 'Jogger Chau Chau', 'bordó', '../assets/img/productos/pantalones/jogger-chau-chau.jpg', 6700, 3));
productos.push(new productBones('24', 'pant', 'Jogger Dark Matter', 'radiactivo xd', '../assets/img/productos/pantalones/jogger-dark-matter.jpg', 6600, 10));

//para mostrar todos los productos en el html
let productosContainer = document.getElementById('productosContainer');

//para mostrar imagen que indique el filtro
let filterTextContainer = document.getElementById('filterTextContainer');

//muestra todos los productos en el html
for (const producto of productos) {

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
    productosContainer.append(card)
};

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
