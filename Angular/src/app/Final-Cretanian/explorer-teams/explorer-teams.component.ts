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
      "groupName" : 'yolololololol'
    },
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'yolololololol'
    } , 
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'yolololololol'
    }     
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

