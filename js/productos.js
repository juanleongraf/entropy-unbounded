let cart = [];
const productos = [];
let filter = document.getElementById('filter');
let filterValue = 'todo';
let sort = document.getElementById('sort');
let sortValue = 'predeterminado';

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

//array de productos
let productosSorted = productos;
console.log(productos);

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

let productosContainer = document.getElementById('productosContainer');
let filterTextContainer = document.getElementById('filterTextContainer');
console.log({ productosContainer })
console.log({ filterTextContainer })

let img = document.createElement('div');

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
                        <button class="btn btn-color-30 alcarro" id="addToCart${producto.id}">Al carrito</button>
                    </div>`;
    productosContainer.append(card)
};