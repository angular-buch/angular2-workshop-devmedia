import { Book } from './book';

describe('Rating a book', () => {

  let book;
  beforeEach(() => {
    book = new Book('x', 'x', 'x', 0);
  });

  it('rateUp should increase number', () => {
    book.rating = 4;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBeLessThanOrEqual(5);
  });

  it('should not be possible have a rating smaller than 0', () => {
    book.rating = 0;
    book.rateDown();
    expect(book.rating).toBeGreaterThanOrEqual(0);
  });
});
