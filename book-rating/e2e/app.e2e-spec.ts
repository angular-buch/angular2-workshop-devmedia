import { BookRatingPage } from './app.po';

describe('book-rating App', function() {
  let page: BookRatingPage;

  beforeEach(() => {
    page = new BookRatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getH1Text()).toContain('Angular rocks!');
  });
});
