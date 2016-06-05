import { VscodePathsExamplePage } from './app.po';

describe('vscode-paths-example App', function() {
  let page: VscodePathsExamplePage;

  beforeEach(() => {
    page = new VscodePathsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('vscode-paths-example works!');
  });
});
