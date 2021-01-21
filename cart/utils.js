export function findById(id, array) {
    for (let book of array) {
        if (book.id === id) {
            return book;
        }
    }
}

export function calcLineItem(quantity, price) {
    let lineTotal = quantity * price;

    return Math.round(lineTotal * 100) / 100;
}