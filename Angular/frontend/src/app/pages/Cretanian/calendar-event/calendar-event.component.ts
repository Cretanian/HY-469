import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {
  @Input () team: string;
  @Input ('event') event: string;
  @Input ('time') time: string;
  @Input () color: string;
 
  Team_name: string;

  constructor(private _Activatedroute:ActivatedRoute,) {
    this.Team_name = this._Activatedroute.snapshot.paramMap.get("team_name");
    if(this.Team_name == null){
      this.Team_name = '0';
    }
  }

  ngOnInit(): void {
     
  }

}
