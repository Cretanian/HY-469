import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Input ('event') event: string;
  @Input ('time') time: string;
  @Input () color: string;
 
  constructor() {}

  ngOnInit(): void {
   
  }

  public getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

}
