import { LazyloadtestPage } from './app.po';

describe('lazyloadtest App', () => {
  let page: LazyloadtestPage;

  beforeEach(() => {
    page = new LazyloadtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
