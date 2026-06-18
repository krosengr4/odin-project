const myLibrary = [];

function Book(title, author, pages, isRead, uuid) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.uuid = crypto.randomUUID();

    this.info = function () {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nHas Read: ${this.isRead}\nUUID: ${this.uuid}`;
    };
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function displayLibrary(arr) {
    for (const book of myLibrary) {
        const bookInfo = book.info();
        console.log(bookInfo);
    }
}

addBookToLibrary("test", "Mister Test", 123, true);

displayLibrary(myLibrary);
