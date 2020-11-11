import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-upcoming-events-background',
  templateUrl: './generic-upcoming-events-background.component.html',
  styleUrls: ['./generic-upcoming-events-background.component.css']
})
export class GenericUpcomingEventsBackgroundComponent implements OnInit {

  @Input ('date') date: string;
  @Input ('month') month: string;
  @Input ('day') day: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
