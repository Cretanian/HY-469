import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-teams',
  templateUrl: './f-teams.component.html',
  styleUrls: ['./f-teams.component.css']
})
export class FTeamsComponent implements OnInit {
  teams_array:team[] = [
    {
      "image" : '/assets/teams-button/a.png',
      "groop_name" : 'yolololololol'
    },
    {
      "image" : '/assets/teams-button/a.png',
      "groop_name" : 'yolololololol'
    },
    {
      "image" : '/assets/teams-button/a.png',
      "groop_name" : 'yolololololol'
    }  
    
    ];
  constructor() { }

  ngOnInit(): void {
  }

}

class team{
  image:string;
  groop_name:string;

  constructor() { 
    this.image ='';
    this.groop_name ='';
  }
}