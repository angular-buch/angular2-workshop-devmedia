import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book';

// Smart Component == Container Component
@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  @ViewChild(NgForm) form;

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('12312-123', 'Angular 2', 'yay!', 5),
      new Book('123123123', 'Angular JS 1', 'schön war\'s')
    ];
  }

  add(isbn: string, title: string, description: string) {
    let book = new Book(isbn, title, description);
    this.books.push(book);
    this.form.reset();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
