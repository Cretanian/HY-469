import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-teams',
  templateUrl: './f-teams.component.html',
  styleUrls: ['./f-teams.component.css']
})

export class FTeamsComponent implements OnInit {
  teams_array:team[] = [
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'yolololololol'
    },
    {
      "iconSrc" : '/assets/teams-button/a.png',
      "groupName" : 'yolololololol'
    },
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