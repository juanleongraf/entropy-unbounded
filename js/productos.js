function elemento(id, tipo, nombre, color, url, precio, cant) {
    this.id = id;
    this.tipo = tipo;
    this.nombre = nombre;
    this.color = color;
    this.url = url;
    this.precio = precio;
    this.cant = cant;
}

let cart = [];
let productos = [];

//pantalones
let id1 = new elemento(1, 'pant', 'Jogger Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 0);
let id2 = new elemento(2, 'pant', 'Jogger Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 0);
let id3 = new elemento(3, 'pant', 'Jogger Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 0);
let id4 = new elemento(4, 'pant', 'Jogger Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id5 = new elemento(5, 'pant', 'Jogger Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id6 = new elemento(6, 'pant', 'Jogging Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);

//remeras
let id7 = new elemento(1, 'tshirt', 'Remera Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 0);
let id8 = new elemento(2, 'tshirt', 'Remera Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 0);
let id9 = new elemento(3, 'tshirt', 'Remera Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 0);
let id10 = new elemento(4, 'tshirt', 'Remera Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id11 = new elemento(5, 'tshirt', 'Remera Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id12 = new elemento(6, 'tshirt', 'Remera Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);
let id13 = new elemento(4, 'tshirt', 'Remera Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id14 = new elemento(5, 'tshirt', 'Remera Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id15 = new elemento(6, 'tshirt', 'Remera Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);

//buzos
let id16 = new elemento(1, 'tshirt', 'Remera Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 0);
let id17 = new elemento(2, 'tshirt', 'Remera Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 0);
let id18 = new elemento(3, 'tshirt', 'Remera Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 0);
let id19 = new elemento(4, 'tshirt', 'Remera Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id20 = new elemento(5, 'tshirt', 'Remera Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id21 = new elemento(6, 'tshirt', 'Remera Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);

productos.push(id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13, id14, id15, id16, id17, id18, id19, id20, id21);

console.log(productos);


// ordenar por precio, menor a mayor
// productos.sort(function(a, b) {
//     if (a.precio < b.precio)
//     return -1;
//     if (a.precio > b.precio)
//     return 1;
//     return 0;
// });
// console.log(productos)

// ordenar por precio, mayor a menor
// productos.sort(function(a, b) {
//     if (a.precio < b.precio)
//     return 1;
//     if (a.precio > b.precio)
//     return -1;
//     return 0;
// });
// console.log(productos)


let productosContainer = document.getElementById('productosContainer');
let filterImgContainer = document.getElementById('filterImgContainer');

let img = document.createElement('div');

// img.innerHTML = `<img src="../assets/structure/${categoria}.svg" alt="${categoria}" class="productos__vertical--label">`
//filterImgContainer.append(img)

for (const producto of productos) {

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('bg-color-60');
    card.classList.add('product--card');
    card.classList.add('box-shadow');
    card.classList.add('scale-on-hover');

    card.innerHTML = `<div class="product--card__img">
                        <img src="${producto.url}" alt="">
                        <p class="color-60 bg-color-30 precio">$${producto.precio}</p>
                    </div>
                    <div class="product--card__data">
                        <div>
                            <h3 class="color-30">${producto.nombre}</h3>
                            <h4 class="color-30">${producto.color}</h4>
                        </div>
                        <button class="btn btn-color-30 alcarro" id="${producto.id}">Al carrito</button>
                    </div>`;

    productosContainer.append(card)
};