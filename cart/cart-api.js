import { findById } from './utils.js';

const CART = 'CART';
const emptyCart = [];

export function getCart() {
    const stringCart = localStorage.getItem(CART);

    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
    } else {
        const stringEmptyCart = JSON.stringify(emptyCart);
        localStorage.setItem(CART, stringEmptyCart);

        return emptyCart;
    }
}

