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
    // eslint-disable-next-line no-undef
    lineTotalTd.textContent = `$${calcLineItem(cartItem.quantity, books.price)}`;

    tr.append(titleTd, quantityTd, priceTd, lineTotalTd);

    return tr;
}
