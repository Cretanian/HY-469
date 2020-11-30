import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-calendar',
  templateUrl: './explorer-calendar.component.html',
  styleUrls: ['./explorer-calendar.component.css']
})
export class ExplorerCalendarComponent implements OnInit {
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
