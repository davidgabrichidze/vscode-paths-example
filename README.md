# vscode-paths-example
Example for VSCODE: Paths mapping support in TypeScript (Intellisense, Errors and Warnings, Go to Definition) 
Tracking [Issue #7226](https://github.com/Microsoft/vscode/issues/7226)

This RF is related to TypeScript's **Path mappings based module resolution [#5039 ](https://github.com/Microsoft/TypeScript/issues/5039)**.  The link describes all details how Path mapping works. Please review it.

So here is copy of Example 1 from Microsoft/TypeScript#5039

```
projectRoot
├── folder1
│   └── file1.ts (imports 'folder2/file2')
├── folder2
│   ├── file2.ts (imports './file3')
│   └── file3.ts
└── tsconfig.json
```

Expected behavior is to support 'folder2/file' imports without Errors & Warnings, list classes of module and support Intellisense - in short: normal behavior, as it would be, if imported using relative paths.

![image](https://cloud.githubusercontent.com/assets/12189125/15805862/23ed829e-2b47-11e6-902e-8816f443064f.png)

```
export class LocalModuleClass
{
  public title: string = "Title from local-module!!!";
}
```

TypeScript itself, compiles and builds everything as expected, application works.

Demo app uses [angular-cli](https://github.com/angular/angular-cli). Instructions to run app:
`npm install angular-cli -g`
`npm install`
`ng build`
`ng serve`

