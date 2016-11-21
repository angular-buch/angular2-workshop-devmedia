import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

// Dumb Component == Presentation Component
@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book;

  getStars() {
    return new Array(this.book.rating);
  }

  constructor() { }
}
