let cartWidget = document.querySelector('.cart-widget')

export function showCart() {
    cartWidget.classList.remove('animate__fadeOut', 'animate__animated');
    cartWidget.classList.add('animate__animated', 'animate__fadeIn', 'cart-widget--visibility');
}

export function hideCart() {
    cartWidget.classList.remove('animate__fadeIn', 'cart-widget--visibility');
    cartWidget.classList.add('animate__animated', 'animate__fadeOut');
}
