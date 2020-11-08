import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Input ('image') image_avatar: string;
  @Input ('name') name: string;
  @Input ('last_msg') last_msg: string;
  @Input ('active_state') active: string;

  constructor() { }

  ngOnInit(): void {
  }

}
