// set up functionality
const myLibrary = [ new Book("Der Schwarm", "Frank Schätzing", 1008, "read", "https://m.media-amazon.com/images/I/51wt4ZP8F8L._AC_UF1000,1000_QL80_.jpg" ),
                    new Book("The Contortionists Handbook", "Craig Clavenger", 199, "unread", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387727400i/527823.jpg"),
 ];
const containerBooks = document.querySelector(".container-books");

// show form to add book
const dialogueBox = document.querySelector(".background-dialog");
const addBookButton = document.querySelector("#add-book");
addBookButton.addEventListener("click", () => {
    dialogueBox.style.display = "flex";
})

// cancel input to form
const cancelInput = document.querySelector("#close-dialog");
cancelInput.addEventListener("click", () => {
    dialogueBox.style.display = "none";
})

// add book to library
const submitBookButton = document.querySelector("#submit-book-entry");
submitBookButton.addEventListener("click", (event) => {
    event.preventDefault;
    dialogueBox.style.display = "none";
    addBookToLibrary();
});


function Book (title, author, pages, read, image) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
}


function addBookToLibrary () {
    // get values from form
    let title = document.querySelector("input[name='title']").value;
    let author = document.querySelector("input[name='author']").value;
    let pages = document.querySelector("input[name='pages']").value;
    let image = document.querySelector("input[name='image']").value;
    let read = document.querySelector("input[name='read']").checked ? "read" : "unread";

    // create new book with values
    let book = new Book(title, author, pages, read, image);

    // add to myLibrary
    myLibrary.push(book);

    // display new library and add functionality to buttons
    displayLibrary();
}


function displayLibrary () {
    // clean up existing view field
    containerBooks.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const readText = book.read === "read" ? "Read" : "Unread";

        // create div to display book
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.id = `book-${index}`;
        bookCard.innerHTML = `<div id="image-${index}">
                            <span class="delete-book" id="book-delete-${index}">Delete</span>
                            <img src="${book.image}" alt="">
                        </div>
                        <h2>${book.title}</h2>
                        <p>Author: ${book.author}</p>
                        <p class="pages">Pages: ${book.pages}</p>
                        <button class="${book.read}">${readText}</button>

        `
        // attach div to DOM
        containerBooks.appendChild(bookCard);

        // functionality of toggle read status
        bookCard.querySelector("button").addEventListener("click", function() {
            const btnClass = this.className;
            const btnText = this.textContent;
            const newClassName = btnClass === "read" ? "unread" : "read";
            this.className = newClassName;
            this.textContent = btnText === "Read" ? "Unread" : "Read";
            myLibrary[index].read = newClassName;
        });

        // functionality of delete button
        const bookImage = bookCard.querySelector("div");
        const bookDeleteButton = bookCard.querySelector(".delete-book");

        bookImage.addEventListener("mouseenter", () => {
            bookDeleteButton.style.display = "block";
        });

        bookImage.addEventListener("mouseleave", () => {
            bookDeleteButton.style.display = "none";
        });

        bookDeleteButton.addEventListener("click", () => {
            bookCard.remove();
            myLibrary.splice(index, 1);
        });
    })
}



// display library on page load
displayLibrary();
