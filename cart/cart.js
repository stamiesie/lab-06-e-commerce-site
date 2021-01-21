import { purchaseData } from './data.js';
import { books } from '../products/books.js';
import { findById, calcLineItem, renderLineItems } from './utils.js';


const table = document.getElementById('table');

let total = 0;

for (let item of purchaseData) {
    const book = findById(item.id, books);

    const bookTotal = calcLineItem(item, book);
    total += bookTotal;

    const tableRow = renderLineItems(item, book);

    table.append(tableRow);
}



