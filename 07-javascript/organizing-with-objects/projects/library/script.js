const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.uuid = crypto.randomUUID();

    this.info = function () {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nUUID: ${this.uuid}`;
    };
}

function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function displayLibrary(arr) {
    for (const book of myLibrary) {
        const bookInfo = book.info();
        console.log(bookInfo);
    }
}

addBookToLibrary("test", "Mister Test", 123);

displayLibrary(myLibrary);
