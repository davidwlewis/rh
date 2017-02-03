import { RestoreHampersPage } from './app.po';

describe('restore-hampers App', function() {
  let page: RestoreHampersPage;

  beforeEach(() => {
    page = new RestoreHampersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
