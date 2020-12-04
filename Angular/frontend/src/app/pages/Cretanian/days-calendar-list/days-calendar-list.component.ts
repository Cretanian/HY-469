import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-days-calendar-list',
  templateUrl: './days-calendar-list.component.html',
  styleUrls: ['./days-calendar-list.component.css']
})
export class DaysCalendarListComponent implements OnInit {
  
  event_A: events;
  @Input() day: string;
  @Input() date: string;
  @Input() month: string;
 
  constructor() {}

  ngOnInit(): void {
    this.event_A = new events();
    //vres ta sosta events me vasi tis meres kai ftiakse to sosto pinaka  events_array
    this.event_A.date = this.date;
    this.event_A.month = this.month;
    this.event_A.day = this.day;
    
    this.event_A.events_array =  [
      {
        "event" : '16',
        "time" : 'OCT',
      },{
        "event" : '16',
        "time" : 'OCT',
      }
      ]; 
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

class events{
  day: string;
  date: string;
  month: string;
  events_array: event[] = [];
}
