import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

// Dumb Component == Presentation Component
@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  getStars() {
    return new Array(this.book.rating);
  }

  constructor() { }
}
