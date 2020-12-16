import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-messeges',
  templateUrl: './chat-messeges.component.html',
  styleUrls: ['./chat-messeges.component.css']
})
export class ChatMessegesComponent implements OnInit {

  @Input ('image') image_avatar: string;
  @Input ('name') name: string;
  @Input ('last_msg') last_msg: string;
  @Input ('active_state') active: string;
  @Input ('date') date: string;

  constructor() {}

  ngOnInit(): void {
  }

}
