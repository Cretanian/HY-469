import { Component, Input, OnInit } from '@angular/core';
import { Message, Reaction } from '../Final-Cretanian/conversations/conversations.component';

@Component({
  selector: 'conversation-message-preview',
  templateUrl: './conversation-message-preview.component.html',
  styleUrls: ['./conversation-message-preview.component.css']
})
export class ConversationMessagePreviewComponent implements OnInit {
  @Input('message') message: Message;

  constructor() {}

  ngOnInit(): void {
    if(this.message == undefined)
      console.log('MP: Message is undef');
  }

  findPhoto(photo: string): string{
    return '../../assets/profile_photos/' + photo;
  }

  findEmoji(emoji: string): string{
    return '../../assets/emojis/' + emoji;
  }

  
}
