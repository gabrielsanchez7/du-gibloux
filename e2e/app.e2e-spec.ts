import { DuGiblouxPage } from './app.po';

describe('du-gibloux App', () => {
  let page: DuGiblouxPage;

  beforeEach(() => {
    page = new DuGiblouxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
