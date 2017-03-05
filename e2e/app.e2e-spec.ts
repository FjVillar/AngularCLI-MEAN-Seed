import { AngularCLIMEANPage } from './app.po';

describe('angular-cli-mean App', function() {
  let page: AngularCLIMEANPage;

  beforeEach(() => {
    page = new AngularCLIMEANPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
