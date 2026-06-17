// Write a constructor for making "Book" objects.
// Book objects should contain title, author, pages, and whether you have read the book.
// Include an info() function to report the books information.

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function () {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nHas Read: ${this.isRead}`;
    };
}

let title = "The Hobbit";
let author = "J.R.R. Tolkien";
let pages = 295;
let hasRead = true;

const book = new Book(title, author, pages, hasRead);
const bookInfo = book.info();
console.log(bookInfo);
