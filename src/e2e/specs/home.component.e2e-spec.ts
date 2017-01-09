import { browser, element, by } from 'protractor';

describe('Home', () => {

  beforeEach(async () => {
    return await browser.get('/igo-dev/');
  });

  it('should not have an input', () => {
    expect(element(by.css('sd-home form input')).isPresent()).toEqual(false);
  });
/*
  it('should have a list of computer scientists', () => {
    expect(element(by.css('sd-home ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  it('should add a name to the list using the form', () => {
    element(by.css('sd-home form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-home form button')).click();

    expect(element(by.css('sd-home ul')).getText())
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });*/

});
