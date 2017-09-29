import { SevenWondersDuelManagerPage } from './app.po';

describe('seven-wonders-duel-manager App', () => {
  let page: SevenWondersDuelManagerPage;

  beforeEach(() => {
    page = new SevenWondersDuelManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
