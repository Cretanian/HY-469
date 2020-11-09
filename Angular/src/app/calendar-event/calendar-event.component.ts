import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Input ('event') event: string;
  @Input ('time') time: string;

  constructor() { }

  ngOnInit(): void {
  }

}
