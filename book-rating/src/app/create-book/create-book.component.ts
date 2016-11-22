import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  @Output() bookCreated = new EventEmitter<Book>();
  @ViewChild(NgForm) form;

  add(isbn: string, title: string, description: string) {
    let book = new Book(isbn, title, description);
    this.bookCreated.emit(book);
    this.form.reset();
  }
}
