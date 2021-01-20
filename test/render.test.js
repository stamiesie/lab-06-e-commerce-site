
import { renderBook } from '../products/render.js';
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

    const expected = `<li class="books"><h3 class="title">We Begin At The End</h3><img class="book-image" src="/assets//assets/book1.png"><p class="author">Chris Whitaker</p><p class="category">Fiction</p><p class="price">$19.95</p><button class="buy-button" value="book1">BUY</button></li>`;

    const actual = renderBook(firstBook);

    expect.equal(actual.outerHTML, expected);
});
