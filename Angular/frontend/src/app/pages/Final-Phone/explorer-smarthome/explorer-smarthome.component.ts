import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-smarthome',
  templateUrl: './explorer-smarthome.component.html',
  styleUrls: ['./explorer-smarthome.component.css']
})
export class ExplorerSmarthomeComponent implements OnInit {
  teams_array:team[] = [
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'Ami Living Room',
      "routing" : '/explorer-mobile-onlinedevices'
    },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}

class team{
  iconSrc:string;
  groupName:string;
  routing:string;
  constructor() { 
    this.iconSrc ='';
    this.groupName ='';
    this.routing ='';
  }
}
