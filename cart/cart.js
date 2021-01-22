import { books } from '../products/books.js';
import { findById, calcLineItem, renderLineItems, calcOrderTotal } from './utils.js';
import { clearCart, getCart } from './cart-api.js';

const table = document.getElementById('table');

const purchaseData = getCart();

let total = 0;

for (let item of purchaseData) {
    const book = findById(item.id, books);

    const bookTotal = calcLineItem(item, book);
    total = total + bookTotal;

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
// const totalMessage = document.getElementById('total-message');

if (purchaseData.length === 0) {
    orderButton.disabled = true;
} else {
    orderButton.addEventListener('click', () => {
        // totalMessage.textContent = `$${orderTotal} will be charged to your card on file.  Your items will ship in 3-4 months.`;
        const cart = getCart();
        const orderCart = JSON.stringify(cart, true, 2);
        alert(`Order total: $${orderTotal}.  Thank you! Your order is below: ` + orderCart);
        clearCart();
        window.location.href = '../index.html';
    });
}