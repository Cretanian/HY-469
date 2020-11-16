import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todays-events',
  templateUrl: './todays-events.component.html',
  styleUrls: ['./todays-events.component.css']
})
export class TodaysEventsComponent implements OnInit {
  @Input ('time') time: string;
  @Input ('header') header: string;

  constructor() { }

  ngOnInit(): void {
  }

}
