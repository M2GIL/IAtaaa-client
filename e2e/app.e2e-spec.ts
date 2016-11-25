import { IAtaaaClientPage } from './app.po';

describe('iataaa-client App', function() {
  let page: IAtaaaClientPage;

  beforeEach(() => {
    page = new IAtaaaClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
