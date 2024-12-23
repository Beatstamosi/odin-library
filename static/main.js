const myLibrary = [];


function Book (title, author, pages, read, image) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}


function addBookToLibrary () {
    
}
