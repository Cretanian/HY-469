import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-oncall-files',
  templateUrl: './oncall-files.component.html',
  styleUrls: ['./oncall-files.component.css']
})
export class OncallFilesComponent implements OnInit {
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
