const addBookModal = document.getElementById("my-dialog");
const sumbitBtn = document.getElementById("submit-btn");
const bookTitleEl = document.getElementById("book-title");
const bookAuthorEl = document.getElementById("book-author");
const pageCountEl = document.getElementById("page-count");
const bookCards = document.querySelector(".books");

sumbitBtn.addEventListener("click", submitBtnHandler);

let myLibrary = [];

class Book {
    constructor(title, author, pages, uuid) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.uuid = uuid;
    }

    get getInfo() {
        return `Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}\nUUID: ${this.uuid}`;
    }
}

function generateUUID() {
    return crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages, generateUUID());
    console.log(book.getInfo);
    myLibrary.push(book);
}

function submitBtnHandler() {
    const titleVal = bookTitleEl.value;
    const authorVal = bookAuthorEl.value;
    const pagesVal = pageCountEl.value;

    if (titleVal === "") {
        alert("Book title must be filled out!");
        return;
    }

    if (authorVal === "") {
        alert("Book author must be filled out!");
        return;
    }

    const pagesNum = Number(pagesVal);
    if (!Number.isInteger(pagesNum) || pagesVal === "") {
        alert("Page Count must be filled out with a number!");
        return;
    }

    addBookToLibrary(titleVal, authorVal, pagesNum);
    closeDialog();
    displayLibrary();
}

function deleteBook(book) {
    myLibrary = myLibrary.filter((b) => b.uuid !== book.uuid);
    displayLibrary();
}

function closeDialog() {
    bookTitleEl.value = "";
    bookAuthorEl.value = "";
    pageCountEl.value = "";
    addBookModal.close();
}

function displayLibrary() {
    bookCards.innerHTML = "";

    for (const book of myLibrary) {
        const bookCard = document.createElement("div");
        bookCard.className = "card";

        const titleHeader = document.createElement("h3");
        titleHeader.className = "card-title";
        titleHeader.textContent = book.title;
        bookCard.appendChild(titleHeader);

        const authorP = document.createElement("p");
        authorP.className = "author";
        authorP.textContent = book.author;
        bookCard.appendChild(authorP);

        const pageCountP = document.createElement("p");
        pageCountP.className = "page-count";
        pageCountP.textContent = `Page Count: ${book.pages}`;
        bookCard.appendChild(pageCountP);

        const uuidP = document.createElement("p");
        uuidP.className = "uuid";
        uuidP.textContent = `UUID: ${book.uuid}`;
        bookCard.appendChild(uuidP);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete Book";
        bookCard.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => deleteBook(book));

        bookCards.appendChild(bookCard);
    }
}

addBookToLibrary(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    180,
    generateUUID(),
);
displayLibrary();
