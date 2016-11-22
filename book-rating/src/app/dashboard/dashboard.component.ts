import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

// Smart Component == Container Component
@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('12312-123', 'Angular 2', 'yay!', 5),
      new Book('123123123', 'Angular JS 1', 'schön war\'s')
    ];
  }

  add(isbn, title, description) {
    let book = new Book(isbn.value, title.value, description.value);
    this.books.push(book);
    isbn.value = title.value = description.value = '';
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
