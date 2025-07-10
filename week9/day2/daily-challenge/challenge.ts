interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  protected books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public getBookDetails(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
}

class DigitalLibrary extends Library {
  public readonly website: string;

  constructor(website: string) {
    super();
    this.website = website;
  }

  public listBooks(): string[] {
    return this.books.map(book => book.title);
  }
}

const myDigitalLibrary = new DigitalLibrary("https://mydigitallibrary.com");

myDigitalLibrary.addBook({
  title: "1984",
  author: "George Orwell",
  isbn: "9780451524935",
  publishedYear: 1949,
  genre: "Dystopian"
});

myDigitalLibrary.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "9780060935467",
  publishedYear: 1960
});

console.log(myDigitalLibrary.getBookDetails("9780451524935"));
console.log(myDigitalLibrary.getBookDetails("9780060935467"));
console.log(myDigitalLibrary.listBooks());
