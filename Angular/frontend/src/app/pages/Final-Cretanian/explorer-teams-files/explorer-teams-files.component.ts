import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-explorer-teams-files',
  templateUrl: './explorer-teams-files.component.html',
  styleUrls: ['./explorer-teams-files.component.css']
})
export class ExplorerTeamsFilesComponent implements OnInit {
  files_array:files[] = [
    {
      "header" : 'Recent',
      "icon"  : '/assets/files/show.png'
    },
    {
      "header" : "Favorites",
      "icon"  : '/assets/files/show.png'
    }
  ];

  constructor(private _location: Location) 
    {}
  
  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}

class files{
  header:string;
  icon:string;
  constructor() { 
    this.header ='';
    this.icon ='';
  }
}
