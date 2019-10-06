import { StreamBingoPage } from './app.po';

describe('stream-bingo App', function() {
  let page: StreamBingoPage;

  beforeEach(() => {
    page = new StreamBingoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
