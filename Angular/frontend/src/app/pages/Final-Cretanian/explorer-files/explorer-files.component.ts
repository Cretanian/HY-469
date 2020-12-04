import { Component, OnInit } from '@angular/core';
import { FilesHeadersService } from 'src/app/global/services/Cretanian/files-headers/explorer-teams.service';

@Component({
  selector: 'app-explorer-files',
  templateUrl: './explorer-files.component.html',
  styleUrls: ['./explorer-files.component.css']
})
export class ExplorerFilesComponent implements OnInit {
  files_array:files[];

  constructor(private fileheadersService: FilesHeadersService) {}

  ngOnInit(): void {

    this.fileheadersService.getAll("asd").subscribe(data => {
        this.files_array = data as files[];
    });

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
