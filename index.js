document.querySelector(`button[name="add"]`).addEventListener('click', showForm);
document.querySelector(`form`).addEventListener('submit', addBook);

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

function addBook(e) {
    e.preventDefault();
    let form = this;

    let book = new Book(form.title.value, form.author.value, form.pages.value, form.read.value);
    pushBook(book);
    display();

    hideForm();
    form.reset();
}

function pushBook(book) {
    library.push(book);
}

function display() {
    const books = document.querySelector(".library");
    books.replaceChildren();
    for (let i = 0; i < library.length; i++) {
        const book = document.createElement("div");
        let content = library[i];

        book.classList.add("book");
        book.textContent = `${content.title} ${content.author} ${content.pages} ${content.read}`;

        books.appendChild(book);
    }
}

function showForm(e) {
    overlay.classList.remove("invisible");
}

function hideForm(e) {
    overlay.classList.add("invisible");
}