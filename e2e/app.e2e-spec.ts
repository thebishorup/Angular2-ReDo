import { Angular2ReDoPage } from './app.po';

describe('angular2-re-do App', function() {
  let page: Angular2ReDoPage;

  beforeEach(() => {
    page = new Angular2ReDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
