import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-files',
  templateUrl: './explorer-files.component.html',
  styleUrls: ['./explorer-files.component.css']
})
export class ExplorerFilesComponent implements OnInit {
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
  constructor() { }

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
