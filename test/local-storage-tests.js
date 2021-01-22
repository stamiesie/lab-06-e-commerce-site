import { getCart, clearCart, setCart } from '../cart/cart-api.js';


const test = QUnit.test;


// getCart //
test('getCart should get the correct cart from local storage', (expect) => {
    // test cart 
    const cartBook = [
        {
            id: 'book1',
            quantity: 3,
        },
        {
            id: 'book4',
            quantity: 5,
        }
    ];

    // turn test cart to string
    const stringCart = JSON.stringify(cartBook);

    // put stringed test cart into local storage
    localStorage.setItem('CART', stringCart);

    // call function to get cartBook out of local storage
    const cart = getCart();

    // check to see if the cart in local storage matches cartBook
    expect.deepEqual(cart, cartBook);
});

// clearCart //
test('clearCart should clear cart from local storage', (expect) => {
    // test cart 
    const cartBook = [
        {
            id: 'book1',
            quantity: 3,
        },
        {
            id: 'book4',
            quantity: 5,
        }
    ];
    // setup empty cart to compare to the cart after clearCart is used
    const emptyCart = [];

    // turn test cart to string
    const stringCart = JSON.stringify(cartBook);

    // put stringed test cart into local storage
    localStorage.setItem('CART', stringCart);

    // call function to clear now stringed cartBook out of local storage
    clearCart();

    // call function getCart to store the cart - now an empty string - to compare to emptyCart made above
    const cart = getCart();

    // compare cart (now empty) to pull the cart out of local storage and compare to emptyCart for equality
    expect.deepEqual(cart, emptyCart);
});

// setCart //
test('setCart should stringify and set cart to local storage', (expect) => {
    // test cart 
    const cartBook = [
        {
            id: 'book1',
            quantity: 3,
        },
        {
            id: 'book4',
            quantity: 5,
        }
    ];

    // use setCart to put cartBook in local storage
    setCart(cartBook);

    // create a const to store the current cart using getCart function
    const cart = getCart();

    // compare cartBook (now used by setCart) to the current cart (called by getCart)
    expect.deepEqual(cartBook, cart);
});
