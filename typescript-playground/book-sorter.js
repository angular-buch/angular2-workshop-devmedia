"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var book_1 = require('./book');
var log_1 = require('./log');
var BookSorter = (function () {
    function BookSorter() {
        this.wichtig = "WICHTIG";
        this.books = [
            new book_1.Book('123-123123'),
            new book_1.Book('123-123123123')
        ];
    }
    BookSorter.prototype.sortBooks = function () {
        var _this = this;
        this.books.sort(function (a, b) {
            console.log(_this.wichtig);
            return +a.isbn - +b.isbn;
        });
    };
    BookSorter = __decorate([
        log_1.Log('test')
    ], BookSorter);
    return BookSorter;
}());
exports.BookSorter = BookSorter;
//# sourceMappingURL=book-sorter.js.map