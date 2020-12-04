import { Component, OnInit } from '@angular/core';
import { SmarthomeListService } from 'src/app/global/services/Cretanian/lists/smarthome-list/smarthome-list.service';

@Component({
  selector: 'app-explorer-smarthome',
  templateUrl: './explorer-smarthome.component.html',
  styleUrls: ['./explorer-smarthome.component.css']
})
export class ExplorerSmarthomeComponent implements OnInit {
  teams_array:team[];

 constructor(private smarthomelistService: SmarthomeListService) {}

  ngOnInit(): void {

    this.smarthomelistService.getAll("asd").subscribe(data => {
        this.teams_array = data as team[];
    });

  }
}

class team{
  iconSrc:string;
  groupName:string;
  constructor() { 
    this.iconSrc ='';
    this.groupName ='';
  }
}
