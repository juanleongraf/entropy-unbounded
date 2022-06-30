let container = document.getElementById('cartParent');
let indexconfirm = document.title;
let cartIcon = document.createElement('div');
cartIcon.classList.add('btn');
cartIcon.classList.add('btn');
console.log(indexconfirm)
if (indexconfirm == 'Entropy - Unbounded') {
    cartIcon.innerHTML = `<img src="./assets/icons/cart-icon.svg" alt="Cart" class="cart--icon btn btn-color-10">
                        <span class="cart--number">2</span>`
    //cartIcon.addEventListener('click', addToCart);
    container.append(cartIcon);
}
else {
    cartIcon.innerHTML = `<img src="../assets/icons/cart-icon.svg" alt="Cart" class="cart--icon btn btn-color-10">
                        <span class="cart--number">2</span>`
    //cartIcon.addEventListener('click', addToCart);
    container.append(cartIcon);
}


// function addToCart() {
//     return
// }