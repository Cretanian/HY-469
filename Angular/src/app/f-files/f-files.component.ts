import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-files',
  templateUrl: './f-files.component.html',
  styleUrls: ['./f-files.component.css']
})
export class FFilesComponent implements OnInit {

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
