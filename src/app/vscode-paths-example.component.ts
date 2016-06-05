import { Component, OnInit } from '@angular/core';
import {LocalModuleClass} from 'local-module/index';

@Component({
  moduleId: module.id,
  selector: 'vscode-paths-example-app',
  templateUrl: 'vscode-paths-example.component.html',
  styleUrls: ['vscode-paths-example.component.css']
})
export class VscodePathsExampleAppComponent implements OnInit {
  title = 'vscode-paths-example works!';
  
  ngOnInit(){
    this.title = new LocalModuleClass().title;
  }
}
