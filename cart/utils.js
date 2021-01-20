export function findById(id, array) {
    for (let book of array) {
        if (book.id === id) {
            return book;
        }
    }
}


