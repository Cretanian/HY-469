import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FilesHeadersService } from 'src/app/global/services/Cretanian/files-headers/explorer-teams.service';

@Component({
  selector: 'app-oncall-files',
  templateUrl: './oncall-files.component.html',
  styleUrls: ['./oncall-files.component.css']
})
export class OncallFilesComponent implements OnInit {
  headers:files_header[];
  file_list:file_list[];

  file: file[];
  constructor(private _location: Location,
          private fileheadersService: FilesHeadersService) 
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    this.file = new Array();
    for(let i = 0; i<2; i++){
      this.file.push(new file());
    }

    this.fileheadersService.getAll("asd").subscribe(data => {
      this.headers = data as files_header[];
      this.file[0].header = this.headers[0];
      this.file[1].header = this.headers[1];
    });

    this.fileheadersService.getAll2("asd").subscribe(data => {
      this.file_list = data as file_list[];
      this.file[0].set_param_chat(this.file_list, '1' );
      this.file[1].set_param_chat(this.file_list, '0' );
      //to do teams
    });

  }

}

class file{
  header:files_header;
  file_list:file_list[] = [];

  constructor(){}

  set_param_chat(chats_list_param: file_list[], fav:string) {

    for (let i = 0; i < chats_list_param.length; i++) {
      if(chats_list_param[i].Favorites === fav)
      {
        this.file_list.push(chats_list_param[i]);
      }
    }

  }
}
class files_header{
  header:string;
  icon:string;
  constructor() { 
    this.header ='';
    this.icon ='';
  }
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
