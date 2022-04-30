function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

class Library {
  constructor() {
    this.books = [];
  }

  #addCardForBook(book) {
    const container = document.querySelector(".books");
    const bookCard = document.createElement("div");

    const bookTitle = document.createElement("span");
    bookTitle.innerHTML = "Title: " + book.title;
    const bookAuthor = document.createElement("span");
    bookAuthor.innerHTML = "Author: " + book.author;
    const bookPages = document.createElement("span");
    bookPages.innerHTML = "Pages: " + book.pages;
    const bookRead = document.createElement("span");
    bookRead.innerHTML = "Read: " + book.isRead;
    const deleteButtonDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("card-delete-button");
    deleteButton.innerHTML = "Delete";
    deleteButtonDiv.appendChild(deleteButton);

    bookCard.classList.add("book-card");
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(deleteButtonDiv);
    container.appendChild(bookCard);
  }

  updateCardsAllBooks() {
    // Clear screen and re-display all books
    const container = document.querySelector(".books");
    container.innerHTML = "";
    for (let book of this.books) {
      this.#addCardForBook(book);
    }
  }

  #assignBookID(newBook) {
    // If no books strart at zero
    if (this.books.length == 0) {
      newBook.id = 0;
      return;
    }

    // Otherwise increment on the highest existing id
    let currentMax = 0;
    for (let book of this.books) {
      if (book.id > currentMax) {
        currentMax = book.id;
      }
    }
    newBook.id = currentMax + 1;
  }

  addToLibrary(book) {
    this.#assignBookID(book);
    this.books.push(book);
  }
}

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function createExampleBooks() {
  let books = [
    new Book("Moby-Dick", "Herman Melville", 378, false),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, true),
  ];

  for (let book of books) {
    library.addToLibrary(book);
  }
}

function handleNewBookInput() {
  const title = document.querySelector(".title-input").value;
  const author = document.querySelector(".author-input").value;
  const pages = document.querySelector(".pages-input").value;
  const read = document.querySelector(".read-input").value;

  const newBook = new Book(title, author, pages, read == "Yes");

  // Book must have all fields filled in
  const allFilled = title != "" && author != "" && pages != "" && read != "";

  console.log(allFilled);

  if (allFilled) {
    library.addToLibrary(newBook);
    console.log("Adding new book");
  }
}

// Event listener for adding new book
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (e) => {
  handleNewBookInput();
  library.updateCardsAllBooks();
});

const library = new Library();

createExampleBooks();
library.updateCardsAllBooks();
