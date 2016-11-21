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
      new Book('12312-123', 'Angular 2', 'yay!'),
      new Book('123123123', 'Angular JS 1', 'schön war\'s')
    ];
  }
}
