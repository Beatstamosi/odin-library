function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

const book = new Book("LOR", "Tolkien", "560", "read");
book.info();