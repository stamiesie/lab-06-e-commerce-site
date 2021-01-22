import { findById } from './utils.js';

const CART = 'CART';
const emptyCart = [];

export function getCart() {
    const stringCart = localStorage.getItem(CART);

    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);

        return parsedCart;
    } else {
        const stringEmptyCart = JSON.stringify(emptyCart);
        localStorage.setItem(CART, stringEmptyCart);

        return emptyCart;
    }
}

export function clearCart() {
    const stringCart = JSON.stringify(emptyCart);

    localStorage.setItem(CART, stringCart);
}

export function setCart(cart) {
    const stringCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringCart);
}

export function addToCart(id) {
    const cart = getCart();
    const cartBook = findById(id, cart);

    if (cartBook) {
        cartBook.quantity++;
    } else {
        const newCartBook = {
            id: id,
            quantity: 1,
        };
        cart.push(newCartBook);
    }
    setCart(cart);
}

