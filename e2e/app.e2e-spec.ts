import { RangleIOAngular2Page } from './app.po';

describe('rangle-ioangular2 App', () => {
  let page: RangleIOAngular2Page;

  beforeEach(() => {
    page = new RangleIOAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
