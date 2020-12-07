import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-display-upcoming-events',
  templateUrl: './f-display-upcoming-events.component.html',
  styleUrls: ['./f-display-upcoming-events.component.css']
})
export class FDisplayUpcomingEventsComponent implements OnInit {
  @Input () day: string;
  @Input () team_name: string;
  @Input ()current_events_array:event[];

  constructor() { 
    
}

  ngOnInit(): void {

  }

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