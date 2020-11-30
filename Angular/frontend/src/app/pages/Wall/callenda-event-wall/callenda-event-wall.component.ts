import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-callenda-event-wall',
  templateUrl: './callenda-event-wall.component.html',
  styleUrls: ['./callenda-event-wall.component.css']
})
export class CallendaEventWallComponent implements OnInit {
  
  @Input ('event') event: string;
  @Input ('time') time: string;

  constructor() { }

  ngOnInit(): void {
  }

}
