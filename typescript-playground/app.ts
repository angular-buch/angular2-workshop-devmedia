import { Book } from './book'

class BookSorter {

    books: Book[]; 
    wichtig = "WICHTIG"

    constructor() {
        this.books = [
            new Book('123-123123'),
            new Book('123-123123123')
        ]      
    }

    sortBooks() {
        this.books.sort((a, b) => {
            console.log(this.wichtig);
            return +a.isbn - +b.isbn;
        })
    }
}

var bookSorter = new BookSorter();
bookSorter.sortBooks();

//console.log('ISBN!', book);