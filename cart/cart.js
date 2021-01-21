import { purchaseData } from './data.js';
import { books } from '../products/books.js';
import { findById, calcLineItem, renderLineItems, calcOrderTotal } from './utils.js';


const table = document.getElementById('table');

let total = 0;

for (let item of purchaseData) {
    const book = findById(item.id, books);

    const bookTotal = calcLineItem(item, book);
    total += bookTotal;

    const tableRow = renderLineItems(item, book);

    table.append(tableRow);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');

let orderTotal = calcOrderTotal(purchaseData, books);

td4.textContent = `Order Total: $${orderTotal}`;

tr.append(td1, td2, td3, td4);

table.append(tr);

const orderButton = document.getElementById('order-total');
const totalMessage = document.getElementById('total-message');

orderButton.addEventListener('click', () => {
    totalMessage.textContent = `$${orderTotal} will be charged to your card on file.  Your items will ship in 3-4 months.`;

});