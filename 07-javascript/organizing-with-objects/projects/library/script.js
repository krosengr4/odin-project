const addBookModal = document.getElementById("my-dialog");
const sumbitBtn = document.getElementById("submit-btn");
const bookTitleEl = document.getElementById("book-title");
const bookAuthorEl = document.getElementById("book-author");
const pageCountEl = document.getElementById("page-count");

sumbitBtn.addEventListener("click", addBookToLibrary);

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

function addBookToLibrary() {
    const titleVal = bookTitleEl.value;
    if (titleVal === "") {
        alert("Book Title must be filled out!");
        return;
    }

    const authorVal = bookAuthorEl.value;
    if (authorVal === "") {
        alert("Book Author must be filled out!");
        return;
    }

    const pagesVal = pageCountEl.value;
    const pagesNum = Number(pagesVal);
    if (!Number.isInteger(pagesNum) || pagesVal === "") {
        alert("Page Count must be filled out with a number!");
        return;
    }

    let book = new Book(titleVal, authorVal, pagesVal);
    const bookValues = book.info();
    console.log(bookValues);

    myLibrary.push(book);
    closeDialog();
}

function closeDialog() {
    bookTitleEl.value = "";
    bookAuthorEl.value = "";
    pageCountEl.value = "";
    addBookModal.close();
}

function displayLibrary() {
    for (const book of myLibrary) {
        const bookInfo = book.info();
        console.log(bookInfo);
    }
}

displayLibrary(myLibrary);
