import { Component, OnInit } from '@angular/core';

import { BookStoreService } from './../shared/book-store.service';
import { Book } from '../shared/book';

// Smart Component == Container Component
@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
     this.bs.getAll().subscribe(books => {
       this.books = books;
       this.reorderBooks();
     });
  }

  add(book: Book) {
    this.books.push(book);
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
