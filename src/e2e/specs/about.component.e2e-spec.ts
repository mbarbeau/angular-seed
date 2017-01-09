describe('About', () => {

  beforeEach(async () => {
    browser.ignoreSynchronization = true;
    return await browser.get('/');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('h1')).getText()).toEqual('IGO 2');
  });

});
