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
    },
    ];
  constructor() { }

  ngOnInit(): void {
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
