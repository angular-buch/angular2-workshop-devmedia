"use strict";
var book_1 = require('./book');
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
            return 0;
        });
    };
    return BookSorter;
}());
var bookSorter = new BookSorter();
bookSorter.sortBooks();
//console.log('ISBN!', book); 
//# sourceMappingURL=app.js.map