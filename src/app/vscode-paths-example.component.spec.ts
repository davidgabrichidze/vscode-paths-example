import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { VscodePathsExampleAppComponent } from '../app/vscode-paths-example.component';

beforeEachProviders(() => [VscodePathsExampleAppComponent]);

describe('App: VscodePathsExample', () => {
  it('should create the app',
      inject([VscodePathsExampleAppComponent], (app: VscodePathsExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'vscode-paths-example works!\'',
      inject([VscodePathsExampleAppComponent], (app: VscodePathsExampleAppComponent) => {
    expect(app.title).toEqual('vscode-paths-example works!');
  }));
});
