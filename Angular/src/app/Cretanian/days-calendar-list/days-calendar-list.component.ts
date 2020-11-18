import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-calendar-list',
  templateUrl: './days-calendar-list.component.html',
  styleUrls: ['./days-calendar-list.component.css']
})
export class DaysCalendarListComponent implements OnInit {
  events_array:event[] = [
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
    {
      "event" : 'ela re pame volta',
      "time" : '11:00 - 5:40'
    },
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
