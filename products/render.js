export function renderBook(books) {

    const li = document.createElement('li');
    li.classList.add('books');

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.textContent = books.title;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('book-image');
    img.src = `../assets/${books.image}`;
    li.append(img);

    const pAuthor = document.createElement('p');
    pAuthor.classList.add('author');
    pAuthor.textContent = books.author;
    li.append(pAuthor);

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = books.category;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${books.price}`;
    li.append(pPrice);

    const buyButton = document.createElement('button');
    buyButton.classList.add('buy-button');
    buyButton.value = books.id;
    buyButton.textContent = 'BUY';
    li.append(buyButton);

    return li;
}
