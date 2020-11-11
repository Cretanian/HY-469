import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'conversation-message-preview',
  templateUrl: './conversation-message-preview.component.html',
  styleUrls: ['./conversation-message-preview.component.css']
})
export class ConversationMessagePreviewComponent implements OnInit {

  @Input('name') name: string;
  @Input('time') time: string;
  @Input('message') message: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
