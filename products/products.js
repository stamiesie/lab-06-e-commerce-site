import { books } from './books.js';
import { renderBook } from './render.js';

const bookList = document.getElementById('book-list');

for (let book of books) {
    const bookEl = renderBook(book);

    bookList.append(bookEl);
}
