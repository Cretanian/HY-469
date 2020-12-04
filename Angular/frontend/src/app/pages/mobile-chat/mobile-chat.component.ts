import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Message } from '../Final-Cretanian/conversations/conversations.component';
import { Location } from '@angular/common';
import { MessagesService } from '../../global/services/messages/messages.service'
import { ContactMessages_I, Message_I } from '../../../../../backend/src/api/v1/messages/messages.controller'
import { SocketsService } from 'src/app/global/services';


@Component({
  selector: 'mobile-chat',
  templateUrl: './mobile-chat.component.html',
  styleUrls: ['./mobile-chat.component.css']
})
export class MobileChatComponent {
  @Input('contact') contact: string;
  @ViewChild('chatBar', {static:true}) chatBarRef: ElementRef;

  messages: Message[];

  extrasOpened: boolean = false;

  constructor(
      private messagesService: MessagesService,
      private _location: Location,
      private socketService: SocketsService
    ) 
  {
    this.contact = 'AMI Lab'
  }

  ngOnInit(): void{
    this.loadMessages();

    this.socketService.syncMessages('messages/change').subscribe(
      (event) => {
        console.log('Event arrived! Event message: ' + event.message);
        if(event.message == this.contact){
          this.loadMessages();
        }
      }
    )
  }

  loadMessages(): void{
    this.messagesService.getMessagesFrom(this.contact).subscribe((rawData: ContactMessages_I) => {
      let data: Message[] = rawData.messages;

      this.messages = [];
      for(let i = 0; i < data.length; i++){
        this.messages[i] = new Message(data[i]);
      }
    });
  }

  backClicked() {
    this._location.back();
  }
  
}

