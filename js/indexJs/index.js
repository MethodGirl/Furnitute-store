import {
    showCart,
    hideCart
} from './toggleCart.js'

let cartButton = document.querySelector('.header-nav__link-cart');
let cartWidget = document.querySelector('.cart-widget');
const mediaQuery = window.matchMedia('(min-width: 769px)');

export function checkMediaQuery() {
    if (mediaQuery.matches) {
        cartButton.addEventListener('mouseenter', showCart);
        cartWidget.addEventListener('mouseleave', hideCart);
    }
}

checkMediaQuery()