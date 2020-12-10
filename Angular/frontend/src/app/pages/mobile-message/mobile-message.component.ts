import { HttpClient } from '@angular/common/http';
import { Component, ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { MessagesService } from 'src/app/global/services/messages/messages.service';
import { PinboardService } from 'src/app/global/services/wall/pinboard.service';
import { Message, Reaction } from '../Final-Cretanian/conversations/conversations.component';
import { Pin } from '../Wall/pinned/Pin';

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

  constructor(
    private messageService: MessagesService,
    private socketService: SocketsService,
    private pinboardService: PinboardService
  ) {}


  findPhoto(photo: string): string{
    return '../../../assets/profile_photos/' + photo;
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
    let destination: any = {};

    if(this.contact != ''){
      destination.contact = this.contact;
    }
    else{
      destination.teamName = this.teamName;
      destination.conversationID = this.conversationID;
    }
    
    this.messageService.reactTo(destination,this.message.id, emojiSrc);
  }

  pinMessage(comment: string): void{
    console.log('halooo');

    console.log('profile: ' + this.message.photo)

    let message = this.message;
    let pin: Pin = new Pin(
      message.name,
      comment,
      'message',
      message
    )

    this.pinboardService.addPin(pin);
  }
}
