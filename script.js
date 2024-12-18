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


    function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.append(card);

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

    const readContainer = document.createElement("div");
    readContainer.classList.add("read-container");
    
    // Checkbox erstellen
    const readInput = document.createElement("input");
    readInput.type = "checkbox";
    readInput.id = `read-${book.title}`;
    readInput.checked = book.read;
    
    // Label erstellen
    const readLabel = document.createElement("label");
    readLabel.textContent = "Read";
    readLabel.htmlFor = `read-${book.title}`;
    
    // Checkbox und Label zur Karte hinzufügen
    readContainer.appendChild(readInput);
    readContainer.appendChild(readLabel);
    card.appendChild(readContainer);
    
    

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    card.appendChild(deleteButton);
    deleteButton.textContent = "";

    deleteButton.addEventListener("click", () => {
        container.removeChild(card);
      });
};

myLibrary.forEach((book) => createBookCard(book))

const dialog = document.querySelector("dialog");


document.querySelector(".add-btn").addEventListener("click", () => {
    dialog.showModal();
})

document.querySelector("#cls-btn").addEventListener("click", () => {
    dialog.close();
})

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.querySelector("#name").value;
    console.log("Book title:", nameInput);

    const authorInput = document.querySelector("#author").value;
    console.log("Author:", authorInput);

    const pagesInput = document.querySelector("#pages").value;
    console.log("Number of pages:", pagesInput);

    const readInput = document.querySelector("#read").value;
    console.log("Read:", readInput);

    const newBook = new Book(nameInput, authorInput, pagesInput, readInput);
    addBookToLibrary(newBook);

    createBookCard(newBook);

    document.querySelector("#form").reset();

    dialog.close();
}
)