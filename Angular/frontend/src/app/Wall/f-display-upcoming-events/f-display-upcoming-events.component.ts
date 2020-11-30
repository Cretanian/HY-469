import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-display-upcoming-events',
  templateUrl: './f-display-upcoming-events.component.html',
  styleUrls: ['./f-display-upcoming-events.component.css']
})
export class FDisplayUpcomingEventsComponent implements OnInit {
  @Input ('date') date: string;
  @Input ('month') month: string;
  @Input ('day') day: string;

  border_array:border_event[] = [
    {
      "border_date" : "14",
      "border_month" : "JUL",
      "border_day" : "MON"
    },
    {
      "border_date" : "14",
      "border_month" : "JUL",
      "border_day" : "MON"
    },
    {
      "border_date" : "14",
      "border_month" : "JUL",
      "border_day" : "MON"
    },
  
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}

class border_event{
  border_date:string;
  border_month:string;
  border_day:string;
  constructor() { 
    this.border_date ='';
    this.border_month ='';
    this.border_day ='';
  }
}