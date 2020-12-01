import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  @Input ('header') header: string;
  @Input ('icon') icon: string;
  file_array:file[] = [
    {
      "image" : '/assets/files/excel.png',
      "name" : "cat.xls",
      "last_edit" : "1.1MB on 21/05/2010"
    },
    {
      "image" : '/assets/files/excel.png',
      "name" : "cat.xls",
      "last_edit" : "1.1MB on 21/05/2010"
    }
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
class file{
  image:string;
  name:string;
  last_edit:string;
  constructor() { 
    this.image ='';
    this.name ='';
    this.last_edit ='';
  }
}