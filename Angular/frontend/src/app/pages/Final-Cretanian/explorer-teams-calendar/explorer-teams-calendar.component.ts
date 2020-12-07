import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeamCalendarHeaderListService } from 'src/app/global/services/Cretanian/lists/team-calendar-header-list/team-calendar-header-list.service';
@Component({
  selector: 'app-explorer-teams-calendar',
  templateUrl: './explorer-teams-calendar.component.html',
  styleUrls: ['./explorer-teams-calendar.component.css']
})
export class ExplorerTeamsCalendarComponent implements OnInit {

  events_array:event[] = []; 
  helper:helper[]; 
  Team_name: string;

  constructor(private _Activatedroute:ActivatedRoute,
              private fileheadersService: TeamCalendarHeaderListService, 
              private _location: Location) 
              {
                this.Team_name = this._Activatedroute.snapshot.paramMap.get("team_name");
              }

  ngOnInit(): void {
    this.fileheadersService.getAll("asd").subscribe(data => {
      this.helper = data as helper[];
      for (let entry of this.helper) {
        if(this.Team_name === entry.team){
          this.events_array.push(new event(entry.date, entry.month, entry.day));
        }
      }

    });
  }

  backClicked() {
    this._location.back();
  }

}
class helper{
  team: string;
  date: string;
  month:string;
  day: string

}
class event{
  date: string;
  month:string;
  day: string;

  constructor(date: string, month:string, day: string){
    this.date = date;
    this.month = month;
    this.day = day;
  }


}
