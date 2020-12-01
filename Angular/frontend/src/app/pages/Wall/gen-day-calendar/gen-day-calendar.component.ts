import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gen-day-calendar',
  templateUrl: './gen-day-calendar.component.html',
  styleUrls: ['./gen-day-calendar.component.css']
})
export class GenDayCalendarComponent implements OnInit {

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
