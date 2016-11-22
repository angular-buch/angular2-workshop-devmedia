import { browser, element, by } from 'protractor';

export class BookRatingPage {
  navigateTo() {
    return browser.get('/');
  }

  getH1Text() {
    return element(by.css('br-root h1')).getText();
  }
}
