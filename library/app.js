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

    bookCard.classList.add("book-card");
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    container.appendChild(bookCard);
  }

  // #addCardForBook(book) {
  //   const container = document.querySelector(".books");
  //   const bookCard = document.createElement("div");
  //   const cardContent = document.createElement("span");

  //   bookCard.classList.add("book-card");
  //   cardContent.innerHTML = book.title;
  //   cardContent.innerHTML += "<br><br>";
  //   cardContent.innerHTML += book.author;

  //   bookCard.appendChild(cardContent);
  //   container.appendChild(bookCard);
  // }

  updateCardsAllBooks() {
    // Clear screen and re-display all books
    const container = document.querySelector(".books");
    container.innerHTML = "";
    for (let book of this.books) {
      this.#addCardForBook(book);
    }
  }

  addToLibrary(book) {
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
