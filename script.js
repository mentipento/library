const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "read" : "not read yet"}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const mobyDick = new Book("Moby Dick", "Herman Melville", 302, true);
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 279, false);  
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1225, false);  
const greatExpectations = new Book("Great Expectations", "Charles Dickens", 505, false);  
const ulysses = new Book("Ulysses", "James Joyce", 730, false);  
const crimeAndPunishment = new Book("Crime and Punishment", "Fyodor Dostoevsky", 671, true);  


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(mobyDick);
addBookToLibrary(prideAndPrejudice);

const container = document.querySelector("#container")

myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    container.prepend(card);

    const title = document.createElement("p");
    title.classList.add("title");
    card.appendChild(title);
    title.textContent = book.title;

    const author = document.createElement("p");
    author.classList.add("author");
    card.appendChild(author);
    author.textContent = `by ${book.author}`;

    const pages = document.createElement("p");
    pages.classList.add("pages");
    card.appendChild(pages);
    pages.textContent = `${book.pages} pages`;

    const read = document.createElement("p");
    read.classList.add("read");
    card.appendChild(read);
    read.textContent = `${book.read === true ? "read" : "not read"}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    card.appendChild(deleteButton);
    deleteButton.textContent = "╳";

    deleteButton.addEventListener("click", () => {
        container.removeChild(card);
      });
});

