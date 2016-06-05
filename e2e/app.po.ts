export class VscodePathsExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vscode-paths-example-app h1')).getText();
  }
}
