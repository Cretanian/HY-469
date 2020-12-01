import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-teams-calendar',
  templateUrl: './explorer-teams-calendar.component.html',
  styleUrls: ['./explorer-teams-calendar.component.css']
})
export class ExplorerTeamsCalendarComponent implements OnInit {
  events_array:event[] = [
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
    
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}

class event{
  event:string;
  time:string;
  constructor(){
    this.event = '';
    this.time = '';
  }
}
