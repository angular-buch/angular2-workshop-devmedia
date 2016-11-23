import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  private headers: Headers = new Headers();

  constructor(
    @Inject('SERVER_URL') private url: string,
    private http: Http
  ) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.url}books`)
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(r => new Book(r.isbn, r.title, r.description, r.rating)));
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get(`${this.url}book/${isbn}`)   // kein PLURAL S
      .map(response => response.json())
      .map(r => new Book(r.isbn, r.title, r.description, r.rating))
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.url}book`, JSON.stringify(book), { headers: this.headers });
  }
  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.url}book/${book.isbn}`, JSON.stringify(book), { headers: this.headers });
  }
  delete(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.url}book/${isbn}`);
  }
}
