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
    const cardContent = document.createElement("span");

    bookCard.classList.add("book-card");
    cardContent.innerHTML = book.title;
    cardContent.innerHTML += "<br><br>";
    cardContent.innerHTML += book.author;

    bookCard.appendChild(cardContent);
    container.appendChild(bookCard);
  }

  updateCardsAllBooks() {
    for (let book of this.books) {
      console.log(book);
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

const library = new Library();

createExampleBooks();
library.updateCardsAllBooks();
