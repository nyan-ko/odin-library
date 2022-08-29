document.querySelector(`button[name="add"]`).addEventListener('click', showForm);

const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");

overlay.addEventListener('click', hideForm);
form.addEventListener('click', (e) => {
    e.stopPropagation();
});

let library = ["meow", "meow 2", "meow 3", "meow 4"];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(book) {
    library.push(book);
}

function display() {
    const books = document.querySelector(".library");
    for (let i = 0; i < library.length; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        book.textContent = library[i];
        books.appendChild(book);
    }
}

function showForm(e) {
    overlay.classList.remove("invisible");
}

function hideForm(e) {
    overlay.classList.add("invisible");
}

display();