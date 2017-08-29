import { AbtYouPage } from './app.po';

describe('abt-you App', function() {
  let page: AbtYouPage;

  beforeEach(() => {
    page = new AbtYouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
