import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-upcoming-events-background',
  templateUrl: './generic-upcoming-events-background.component.html',
  styleUrls: ['./generic-upcoming-events-background.component.css']
})

//to do: only 7 displayed not more
export class GenericUpcomingEventsBackgroundComponent implements OnInit {
  @Input ('date') date: string;
  @Input ('month') month: string;
  @Input ('day') day: string;

  border_array:border_event[] = [
    {
      "border_time" : "14:00 - 15:30",
      "border_header" : "JULasdadad asdada asda"
    },
    {
      "border_time" : "14:00 - 15:30",
      "border_header" : "JULasdadad asdada asda"
    },{
      "border_time" : "14:00 - 15:30",
      "border_header" : "JULasdadad asdada asda"
    },
  
    ]; 

  constructor() { }

  ngOnInit(): void {
  }

}

class border_event{
  border_time:string;
  border_header:string;

  constructor() { 
    this.border_time ='';
    this.border_header ='';
  }
}