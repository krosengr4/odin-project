const addBookModal = document.getElementById("my-dialog");
const sumbitBtn = document.getElementById("submit-btn");
const bookTitleEl = document.getElementById("book-title");
const bookAuthorEl = document.getElementById("book-author");
const pageCountEl = document.getElementById("page-count");
const bookCards = document.querySelector(".books");

sumbitBtn.addEventListener("click", addBookToLibrary);

let myLibrary = [];

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

    let book = new Book(titleVal, authorVal, pagesNum);
    const bookValues = book.info();
    console.log(bookValues);

    myLibrary.push(book);
    closeDialog();

    displayLibrary();
}

function closeDialog() {
    bookTitleEl.value = "";
    bookAuthorEl.value = "";
    pageCountEl.value = "";
    addBookModal.close();
}

function deleteBook(book) {
    myLibrary = myLibrary.filter((b) => b.uuid !== book.uuid);
    displayLibrary();
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

let greatGatsbyBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
myLibrary.push(greatGatsbyBook);
displayLibrary();
