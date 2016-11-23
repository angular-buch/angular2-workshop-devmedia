import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(
    @Inject('SERVER_URL') private url: string,
    private http: Http
  ) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(this.url + 'books')
      .map(response => response.json())
      .map(rawBooks => rawBooks
        .map(r => new Book(r.isbn, r.title, r.description, r.rating)));
  }

}
