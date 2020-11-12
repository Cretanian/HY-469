import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events-item',
  templateUrl: './upcoming-events-item.component.html',
  styleUrls: ['./upcoming-events-item.component.css']
})


//to do: only 4 displayed not more
export class UpcomingEventsItemComponent implements OnInit {
  
  @Input ('date') date: string;
  @Input ('month') month: string;
  @Input ('day') day: string;

  event_array:event[] = [
  {
    "event_header" : "yolo0",
    "event_time" : "10:00 - 11:00"
  },
  {
    "event_header" : "yolo1",
    "event_time" : "10:00 - 11:00"
  },

  ]; 

  constructor() { }

  ngOnInit(): void {
    
  }
}

class event{
  event_header:string;
  event_time:string;
  constructor() { 
    this.event_header ='';
    this.event_time ='';
  }
}