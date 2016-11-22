import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../shared/book';

// Smart Component == Container Component
@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(@Inject('SERVER_URL') url: string) {
    console.log(url);
  }

  ngOnInit() {
    this.books = [
      new Book('12312-123', 'Angular 2', 'yay!', 5),
      new Book('123123123', 'Angular JS 1', 'schön war\'s')
    ];
  }

  add(book: Book) {
    this.books.push(book);
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
