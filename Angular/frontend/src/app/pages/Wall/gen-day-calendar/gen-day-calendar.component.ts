import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-gen-day-calendar',
  templateUrl: './gen-day-calendar.component.html',
  styleUrls: ['./gen-day-calendar.component.css']
})
export class GenDayCalendarComponent implements OnInit {

  @Input() event_A: events;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

class event{
  event:string;
  time:string;
  color:string;
  constructor(){
    this.event = '';
    this.time = '';
    this.color = '';
    }
}


class events{
  day: string;
  date: string;
  month: string;
  events_array: event[];
}