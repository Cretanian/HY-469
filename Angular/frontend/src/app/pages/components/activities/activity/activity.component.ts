import { Message } from '../activity-message/activity-message';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})

export class ActivityComponent implements OnInit {
  
  @Input() date: string;
  @Input() msg: Message;

  constructor() { }

  ngOnInit(): void {

  }

}
