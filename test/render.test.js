
import { renderBook } from '../products/render.js';
import { findById } from '../cart/utils.js';
import { calcLineItem } from '../cart/utils.js';
import { renderLineItems } from '../cart/utils.js';
import { calcOrderTotal } from '../cart/utils.js';


const test = QUnit.test;

test('should take in a book and return an li', (expect) => {

    const firstBook = {
        id: 'book1',
        title: 'We Begin At The End',
        image: '/assets/book1.png',
        author: 'Chris Whitaker',
        category: 'Fiction',
        price: 19.95,
    };

    const expected = `<li class="books"><h3 class="title">We Begin At The End</h3><img class="book-image" src="../assets//assets/book1.png"><p class="author">Chris Whitaker</p><p class="category">Fiction</p><p class="price">$19.95</p><input class="num-input" type="number" min="-10" placeholder="qty"><button class="buy-button" value="book1">BUY</button></li>`;

    const actual = renderBook(firstBook);

    expect.equal(actual.outerHTML, expected);
});



test('should take in book1 and return book title We Begin At The End', (expect) => {

    const books = [
        {
            id: 'book1',
            title: 'We Begin At The End',
            image: 'book1.png',
            author: 'Chris Whitaker',
            category: 'Fiction',
            price: 19.95,
        },
        {
            id: 'book2',
            title: 'Building for Better Living',
            image: 'book2.png',
            author: 'A. Quincy Jones',
            category: 'Non-Fiction',
            price: 29.95,
        },
        {
            id: 'book3',
            title: 'Fire On The Mountain',
            image: 'book3.png',
            author: 'Edward Abbey',
            category: 'Fiction',
            price: 14.95,
        },
        {
            id: 'book4',
            title: 'The Signal',
            image: 'book4.png',
            author: 'Ron Carlson',
            category: 'Fiction',
            price: 14.95,
        },
        {
            id: 'book5',
            title: 'Neutra',
            image: 'book5.png',
            author: 'Barbara Lamprecht',
            category: 'Non-Fiction',
            price: 19.95,
        },

    ];

    const expected = {
        id: 'book1',
        title: 'We Begin At The End',
        image: 'book1.png',
        author: 'Chris Whitaker',
        category: 'Fiction',
        price: 19.95,
    };

    const actual = findById('book1', books);

    expect.deepEqual(actual, expected);
});




test('will return 9.67 when given 3.11 and 3.11', (expect) => {

    const expected = 9.67;

    const actual = calcLineItem(3.11, 3.11);

    expect.equal(actual, expected);
});


test('should take in purchaseData for book1 and return an td', (expect) => {

    const cartBook = {
        id: 'book1',
        quantity: 3,
    };

    const book = {
        id: 'book1',
        title: 'We Begin At The End',
        image: 'book1.png',
        author: 'Chris Whitaker',
        category: 'Fiction',
        price: 19.95,
    };

    const expected = `<tr><td>We Begin At The End</td><td>3</td><td>19.95</td><td>$59.85</td></tr>`;

    const actual = renderLineItems(cartBook, book);

    expect.equal(actual.outerHTML, expected);
});

test('adds together line item totals into order total', (expect) => {

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

    const book = [
        {
            id: 'book1',
            title: 'We Begin At The End',
            image: 'book1.png',
            author: 'Chris Whitaker',
            category: 'Fiction',
            price: 19.95,
        },
        {
            id: 'book4',
            title: 'The Signal',
            image: 'book4.png',
            author: 'Ron Carlson',
            category: 'Fiction',
            price: 14.95,
        }
    ];

    const expected = 134.60;

    const actual = calcOrderTotal(cartBook, book);

    expect.equal(actual, expected);
});







