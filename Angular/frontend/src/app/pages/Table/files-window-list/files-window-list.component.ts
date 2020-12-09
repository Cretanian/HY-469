import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ami-fullstack-files-window-list',
  templateUrl: './files-window-list.component.html',
  styleUrls: ['./files-window-list.component.scss']
})
export class FilesWindowListComponent implements OnInit {

  @Input() header:string;
  @Input() icon:string;
  @Input() file_list:file_list[];

  dropdownOpen: boolean;

  constructor() {
    this.dropdownOpen = false;
  }

  ngOnInit(): void {}

}

class file_list{
  image:string;
  name:string;
  last_edit:string;
  Favorites:string;
  Team:string;

  constructor() { 
    this.image ='';
    this.name ='';
    this.last_edit ='';
    this.Favorites ='';
    this.Team ='';
  }
}