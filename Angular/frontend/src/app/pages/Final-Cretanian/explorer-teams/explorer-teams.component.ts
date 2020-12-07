import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { TeamsListService } from 'src/app/global/services/Cretanian/lists/teams-lists/teams-list.service';

@Component({
  selector: 'app-explorer-teams',
  templateUrl: './explorer-teams.component.html',
  styleUrls: ['./explorer-teams.component.css']
})
export class ExplorerTeamsComponent implements OnInit {

  teams_array:team[];

  constructor( activatedRoute: ActivatedRoute, private teamslistService: TeamsListService) {}

  ngOnInit(): void {

    this.teamslistService.getAll("asd").subscribe(data => {
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

