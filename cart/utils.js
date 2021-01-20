export function findById(id, array) {
    for (let item in array) {
        if (item === item.id) {
            return item;
        }
    }
}