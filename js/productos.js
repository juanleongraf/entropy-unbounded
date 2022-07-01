//se puede iniciar y cerrar sesion con el mismo boton
//si se cierra sesion se borra el localStorage
//se pueden agregar items al carrito desde el boton agregar o sumando desde el mismo carrito
//poner el contador del item en el carrito en 0 lo remueve del carrito
//falta agregar un metodo de filtrado para solo mostrar remeras, buzos o pantalones
//ese filtro tambien debe funcionar si se accede desde el home a "remeras" "buzos" o "pantalones"

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

//constructor de items
function elemento(id, tipo, nombre, color, url, precio, stock) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.color = color;
    this.url = url;
    this.precio = precio;
    this.stock = stock;
}

//remeras
productos.push(new elemento('10', 'tshirt', 'Remera Kelvin', 'negra', '../assets/img/productos/pantalones/jogger-kelvin.webp', 3200, 100));
productos.push(new elemento('11', 'tshirt', 'Remera Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 3500, 50));
productos.push(new elemento('12', 'tshirt', 'Remera Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 3300, 10));
productos.push(new elemento('13', 'tshirt', 'Remera Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 3100, 3));
productos.push(new elemento('14', 'tshirt', 'Remera Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 3300, 80));
productos.push(new elemento('15', 'tshirt', 'Remera Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3000, 12));
productos.push(new elemento('16', 'tshirt', 'Remera Disrupt', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 10));
productos.push(new elemento('17', 'tshirt', 'Remera Impulse', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 5));
productos.push(new elemento('18', 'tshirt', 'Remera Momentum', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 1));

//buzos
productos.push(new elemento('19', 'buzo', 'Buzo Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 5));
productos.push(new elemento('20', 'buzo', 'Buzo Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 10));
productos.push(new elemento('21', 'buzo', 'Buzo Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 3));
productos.push(new elemento('22', 'buzo', 'Buzo Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 5));
productos.push(new elemento('23', 'buzo', 'Buzo Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 4));
productos.push(new elemento('24', 'buzo', 'Buzo Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 102));

//pantalones
productos.push(new elemento('01', 'pant', 'Jogger Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 10));
productos.push(new elemento('02', 'pant', 'Jogger Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 5));
productos.push(new elemento('03', 'pant', 'Jogger Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 4));
productos.push(new elemento('04', 'pant', 'Jogger Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 3));
productos.push(new elemento('05', 'pant', 'Jogger Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 4));
productos.push(new elemento('06', 'pant', 'Jogging Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 1));
productos.push(new elemento('07', 'pant', 'Jogger Kelvin Clain test long text', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 6900, 10));
productos.push(new elemento('08', 'pant', 'Jogger Chau Chau', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 6700, 3));
productos.push(new elemento('09', 'pant', 'Jogger Dark Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 6600, 10));

// const save = (key,value) => {localStorage.setItem(key,value)}

// for (const producto of productos) {
//     save(producto.id, JSON.stringify(producto))
// }

// //filtrado
// filter.addEventListener('change', function () {
//     if (filter.value == 'Remeras') {
//         filterValue = 'remera';
//         filterAction(filterValue);
//     }

//     if (filter.value == 'Buzos') {
//         filterValue = 'buzo';
//         filterAction(filterValue);
//     }

//     if (filter.value == 'Pantalones') {
//         filterValue = 'pantalon';
//         filterAction(filterValue);
//     }
// });

// function filterAction(fv) {
//     let productosFiltered = productos.filter(obj => {

//     });
//     console.log(productosFiltered);
// }



// //ordenado
// sort.addEventListener('change', function () {
//     if (sort.value == 'default') {
//         // productosDefault(sortValue);
//     }

//     if (sort.value == 'mayor') {
//         productos.sort(function(a, b) {
//             if (a.precio < b.precio)
//             return 1;
//             if (a.precio > b.precio)
//             return -1;
//             return 0;
//         });
//     }

//     if (sort.value == 'menor') {
//         productos.sort(function(a, b) {
//             if (a.precio < b.precio)
//             return -1;
//             if (a.precio > b.precio)
//             return 1;
//             return 0;
//         });
//     }
// });

//para mostrar todos los items en el html
let productosContainer = document.getElementById('productosContainer');

//para mostrar imagen que indique el filtro
let filterTextContainer = document.getElementById('filterTextContainer');

//muestra todos los items en el html
for (const producto of productos) {

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('bg-color-60');
    card.classList.add('product--card');
    card.classList.add('box-shadow');
    card.classList.add('translate-on-hover');

    card.innerHTML = `<div class="product--card__img">
                        <img src="${producto.url}" alt="">
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

//agrega item al carrito
function addToCart(id) {

    //si el item ya esta en el carrito
    if (cart.some((item) => item.id == id)) {
        //suma 1 al mult del item
        changeMult('plus', id)
    }
    //si el item no esta en el carrito
    else {

        //agrega el item nuevo al carrito
        const item = productos.find((productos) => productos.id == id);
        cart.push({
            ...item,
            mult: 1
        });
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

//muestra el subtotal y cantidad de items
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
    totalItemsEl.innerHTML = `Carrito: <span>${totalItems}</span>`

}

//muestra todos los items agregados en el carrito, con su cantidad (mult)
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

//sacar items del carrito --->
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
        let ctasSiNo = prompt('El total es $' + totalnum + ' \n ¿desea abonar en cuotas? \n Indique "sí" o "no"').toLowerCase();
        switch (ctasSiNo) {
            case ('si'):
            case ('sí'):
                keepPreCtas = false;
                cuotas(totalnum);
                break;
            case ('no'):
                keepPreCtas = false;
                alert('El total es entonces $' + totalnum + '. Gracias por su compra, será redirigido para abonar.')
                clearStorage();
                break;
            default:
                break;
        }
    }
}

//funcion para tomar el total y dividirlo en cuotas, con sus recargos
function cuotas(subtotal) {
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
    while (keep) {
        ncuotas = prompt(`Escriba el número de cuotas en las que desea abonar: \n 3 cuotas de $${cuotas3.valorCtas} (total: $${cuotas3.totCtas}) \n 6 cuotas de $${cuotas6.valorCtas}  (total: $${cuotas6.totCtas}) \n 12 cuotas de $${cuotas12.valorCtas}  (total: $${cuotas12.totCtas})`)
        switch (ncuotas) {
            case ('3'):
                keep = false;
                alert('El total es $' + cuotas3.totCtas + ', a pagar en ' + ncuotas + ' cuotas de $' + cuotas3.valorCtas);
                break

            case ('6'):
                keep = false;
                alert('El total es $' + cuotas6.totCtas + ', a pagar en ' + ncuotas + ' cuotas de $' + cuotas6.valorCtas);
                break

            case ('12'):
                keep = false;
                alert('El total es $' + cuotas12.totCtas + ', a pagar en ' + ncuotas + ' cuotas de $' + cuotas12.valorCtas);
                break;
            default: break;
        }
        alert('Gracias por su compra! Será redirigido para abonar.')
        clearStorage();
    }
}