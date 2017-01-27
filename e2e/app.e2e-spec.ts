import { RekrutacjaPage } from './app.po';

describe('rekrutacja App', function() {
  let page: RekrutacjaPage;

  beforeEach(() => {
    page = new RekrutacjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
