import { Component, ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { Message, Reaction } from '../Final-Cretanian/conversations/conversations.component';

@Component({
  selector: 'mobile-message',
  templateUrl: './mobile-message.component.html',
  styleUrls: ['./mobile-message.component.css']
})
export class MobileMessageComponent {

  @Input('message') message: Message;

  constructor() { 
    
  }

  findPhoto(photo: string): string{
    return '../../../assets/' + photo;
  }

  findEmoji(emoji: string): string{
    console.log('HALLOOOOO: ' + emoji);
    return '../../../assets/emojis/' + emoji;
  }

}
