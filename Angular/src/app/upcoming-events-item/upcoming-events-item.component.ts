import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events-item',
  templateUrl: './upcoming-events-item.component.html',
  styleUrls: ['./upcoming-events-item.component.css']
})
export class UpcomingEventsItemComponent implements OnInit {

  @Input ('date') date: string;
  @Input ('month') month: string;
  @Input ('day') day: string;

  constructor() { }

  ngOnInit(): void {
  }

}
