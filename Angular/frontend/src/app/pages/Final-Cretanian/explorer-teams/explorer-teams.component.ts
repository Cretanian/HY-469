import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-teams',
  templateUrl: './explorer-teams.component.html',
  styleUrls: ['./explorer-teams.component.css']
})
export class ExplorerTeamsComponent implements OnInit {
  teams_array:team[] = [
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'ZoomE',
      "routing" : '/explorer-mobile-team-conversations'
    },
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'DnD | Reloaded',
      "routing" : '/'
    }, 
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'Intelligent Living Room',
      "routing" : '/'
    }     
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

