import { HttpClient } from '@angular/common/http';
import { Component, ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MessagesService } from 'src/app/global/services/messages/messages.service';
import { Message, Reaction } from '../Final-Cretanian/conversations/conversations.component';

@Component({
  selector: 'mobile-message',
  templateUrl: './mobile-message.component.html',
  styleUrls: ['./mobile-message.component.css']
})
export class MobileMessageComponent {

  @Input('contact') contact: string;
  @Input('teamName') teamName: string;
  @Input('conversationID') conversationID: number;
  @Input('message') message: Message;

  extrasOpened: boolean = false;

  constructor(private messageService: MessagesService, private socketService: SocketsService) {}


  findPhoto(photo: string): string{
    return '../../../assets/' + photo;
  }

  findEmoji(emoji: string): string{
    return '../../../assets/emojis/' + emoji;
  }

  openExtras($event?): void{
    this.extrasOpened = true;
  }

  closeExtras($event?): void{
    this.extrasOpened = false;
  }

  reactTo(emojiSrc: string): void{
    console.log('contact: ' + this.contact);
    console.log('team: ' + this.teamName);
    console.log('conv: ' + this.conversationID);
    
    let destination: any = {};

    if(this.contact != ''){
      console.log('a perasoume mia epafi');
      destination.contact = this.contact;
    }
    else{
      destination.teamName = this.teamName;
      destination.conversationID = this.conversationID;
    }
    
    this.messageService.reactTo(destination,this.message.id, emojiSrc);
  }
}
