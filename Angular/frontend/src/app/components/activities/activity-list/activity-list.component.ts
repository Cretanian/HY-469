import { Message } from './../activity-message/activity-message';
import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  @Input() messageList: Message[];

  constructor() { }

  ngOnInit(): void {
    this.messageList = [      
        new Message(
        "added you", 
        "../../../../assets/icons/file (1).svg",
        false,
        "to Team Zoume",
        "Asterios",
        "Mon"),

        new Message(
        "replied", 
        "../../../../assets/icons/file (1).svg",
        true,
        "HY486 Principles of Distributed ... > Group 3",
        "Asterios +3",
        "01/13"),

        new Message(
        "added a file", 
        "../../../../assets/icons/file (1).svg",
        true,
        "HY486 Principles of Distributed ... > Group 3",
        "Asterios",
        "14/13"),
      
    ]
  }

}
