const shelf1 = [
    {name: 'name1', shelf: 'a'},
    {name: 'name2', shelf: 'a'},
];

const shelf2 = [
    {name: 'name3', shelf: 'b'},
    {name: 'name4', shelf: 'b'},
];

// spread syntax
const allBooks = [...shelf1, ...shelf2];
console.log(allBooks);

// higher order function
// Explaination:
// 1. filter function takes an array of books
// 2. filter function returns a function that takes a shelf
// 3. the returned function filters the books by shelf
const filter = (books) => ((shelf) => books.filter((selectedBook) => selectedBook.shelf === shelf));

const filterByShelf = filter(allBooks);
const booksOnShelfB = filterByShelf("b");
console.log(booksOnShelfB);