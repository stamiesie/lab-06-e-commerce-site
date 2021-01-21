export function findById(id, array) {
    for (let book of array) {
        if (book.id === id) {
            return book;
        }
    }
}

export function calcLineItem(quantity, price) {
    let lineTotal = quantity * price;

    return (Math.round(lineTotal * 100) / 100);

}

export function renderLineItems(cartItem, books) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const lineTotalTd = document.createElement('td');

    titleTd.textContent = books.title;
    quantityTd.textContent = quantity;
    priceTd.textContent = books.price;
    lineTotalTd.textContent = `$${calcLineItem(cartItem.quantity, books.price).toFixed(2)}`;

    tr.append(titleTd, quantityTd, priceTd, lineTotalTd);

    return tr;
}

export function calcOrderTotal(cartArray, booksArray) {
    let total = 0;
    for (let item of cartArray) {
        const bookObj = findById(item.id, booksArray);
        const lineTotal = calcLineItem(item.quantity, bookObj.price);
        total = total + lineTotal;
    }
    return Math.round(total * 100) / 100;
}
