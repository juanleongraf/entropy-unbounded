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
let filter = document.getElementById('filter');
let filterValue = 'todo';
let sort = document.getElementById('sort');
let sortValue = 'predeterminado';

//remeras
let id01 = new elemento('10', 'tshirt', 'Remera Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 3200, 0);
let id02 = new elemento('11', 'tshirt', 'Remera Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 3500, 0);
let id03 = new elemento('12', 'tshirt', 'Remera Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 3300, 0);
let id04 = new elemento('13', 'tshirt', 'Remera Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 3100, 0);
let id05 = new elemento('14', 'tshirt', 'Remera Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 3300, 0);
let id06 = new elemento('15', 'tshirt', 'Remera Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3000, 0);
let id07 = new elemento('16', 'tshirt', 'Remera Disrupt', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id08 = new elemento('17', 'tshirt', 'Remera Impulse', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id09 = new elemento('18', 'tshirt', 'Remera Momentum', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);

//buzos
let id10 = new elemento('19', 'buzo', 'Buzo Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 0);
let id11 = new elemento('20', 'buzo', 'Buzo Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 0);
let id12 = new elemento('21', 'buzo', 'Buzo Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 0);
let id13 = new elemento('22', 'buzo', 'Buzo Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id14 = new elemento('23', 'buzo', 'Buzo Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id15 = new elemento('24', 'buzo', 'Buzo Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);

//pantalones
let id16 = new elemento('01', 'pant', 'Jogger Kelvin', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 5000, 0);
let id17 = new elemento('02', 'pant', 'Jogger Chaos', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 4800, 0);
let id18 = new elemento('03', 'pant', 'Jogger Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 4900, 0);
let id19 = new elemento('04', 'pant', 'Jogger Disorder', 'mostaza', '../assets/img/productos/pantalones/jogger-disorder.webp', 4300, 0);
let id20 = new elemento('05', 'pant', 'Jogger Energy', 'gris', '../assets/img/productos/pantalones/jogger-energy.webp', 4700, 0);
let id21 = new elemento('06', 'pant', 'Jogging Force', 'azul marino', '../assets/img/productos/pantalones/jogging-force.webp', 3600, 0);
let id22 = new elemento('07', 'pant', 'Jogger Kelvin Clain test long text', 'negro', '../assets/img/productos/pantalones/jogger-kelvin.webp', 6900, 0);
let id23 = new elemento('08', 'pant', 'Jogger Chau Chau', 'verde militar', '../assets/img/productos/pantalones/jogger-chaos.webp', 6700, 0);
let id24 = new elemento('09', 'pant', 'Jogger Dark Matter', 'azul marino', '../assets/img/productos/pantalones/jogger-matter.webp', 6600, 0);

//array de productos
productos.push(id01, id02, id03, id04, id05, id06, id07, id08, id09, id10, id11, id12, id13, id14, id15, id16, id17, id18, id19, id20, id21, id22, id23, id24);
let productosSorted = productos;
console.log(productos);


//filtrado
filter.addEventListener('change', function () {
    if (filter.value == 'Remeras') {
        filterValue = 'remera';
        filterAction(filterValue);
    }

    if (filter.value == 'Buzos') {
        filterValue = 'buzo';
        filterAction(filterValue);
    }

    if (filter.value == 'Pantalones') {
        filterValue = 'pantalon';
        filterAction(filterValue);
    }
});

function filterAction(fv) {
    let productosFiltered = productos.filter(obj => {

    });
    console.log(productosFiltered);
}



//ordenado
sort.addEventListener('change', function () {
    if (sort.value == 'default') {
        // productosDefault(sortValue);
    }

    if (sort.value == 'mayor') {
        productos.sort(function(a, b) {
            if (a.precio < b.precio)
            return 1;
            if (a.precio > b.precio)
            return -1;
            return 0;
        });
    }

    if (sort.value == 'menor') {
        productos.sort(function(a, b) {
            if (a.precio < b.precio)
            return -1;
            if (a.precio > b.precio)
            return 1;
            return 0;
        });
    }
});

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
                        <button class="btn btn-color-30 alcarro" id="${producto.id}">Al carrito</button>
                    </div>`;
    productosContainer.append(card)
};