import { Component, OnInit, Input } from '@angular/core';
import {Message} from './activity-message';

@Component({
  selector: 'activity-message',
  templateUrl: './activity-message.component.html',
  styleUrls: ['./activity-message.component.css']
})
export class ActivityMessageComponent implements OnInit {

  @Input() msg: Message;

  constructor() { }

  ngOnInit(): void {
    this.msg = new Message(
      "added you to ", 
      "../../../../assets/icons/file (1).svg",
      false,
      "Team Zoume",
      "Asterios");
  }

}
