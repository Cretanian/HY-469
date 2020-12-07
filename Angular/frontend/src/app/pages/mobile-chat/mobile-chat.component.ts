import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Message } from '../Final-Cretanian/conversations/conversations.component';
import { Location } from '@angular/common';
import { MessagesService } from '../../global/services/messages/messages.service'
import { ContactMessages_I, Message_I, Conversation_I } from '../../../../../backend/src/api/v1/messages/messages.controller'
import { SocketsService } from 'src/app/global/services';


@Component({
  selector: 'mobile-chat',
  templateUrl: './mobile-chat.component.html',
  styleUrls: ['./mobile-chat.component.css']
})
export class MobileChatComponent {
  @Input('contact') contact: string;

  @Input('teamName') teamName: string;
  @Input('conversationID') conversationID: number;

  @ViewChild('chatBar', {static:true}) chatBarRef: ElementRef;

  user: string = 'undef';
  messages: Message[];

  extrasOpened: boolean = false;

  constructor(
      private messagesService: MessagesService,
      private _location: Location,
      private socketService: SocketsService
    ) 
  {
    this.user = 'agantos';
  }

  ngOnInit(): void{
    this.loadMessages();

    this.socketService.syncMessages('messages/change').subscribe(
      (event) => {
        console.log('Event arrived! Event message: ' + event.message);
        if(event.message == (this.contact || this.teamName)){
          this.loadMessages();
        }
      }
    )
  }

  successCallback(result){

  }

  failureCallback(error){

  }

  loadMessages(): any{
      new Promise((resolve, reject) =>{
        if(this.contact != undefined)
          this.loadContactMessages();
        else
          this.loadTeamConversationMessages();
      })

      //Fix messages sent by current user.
      setTimeout(() => {
        console.log('fix my meessages...');
        for(let i = 0; i < this.messages.length; i++){
          if(this.messages[i].name == this.user){
            console.log('alignment: ' + this.messages[i].alignment);
            this.messages[i].alignment = 'right';
            this.messages[i].photo = '';
          }
        }
      }, 100)
  }

  loadContactMessages(): void{
    this.messagesService.getMessagesFrom(this.contact).subscribe((rawData: ContactMessages_I) => {
      let data: Message[] = rawData.messages;

      this.messages = [];
      for(let i = 0; i < data.length; i++){
        this.messages[i] = new Message(data[i]);
      }
    });
  }

  loadTeamConversationMessages(): void{
    console.log('team: ' + this.teamName, ' id: ' + this.conversationID );
    this.messagesService.getTeamConversation(this.teamName, this.conversationID).subscribe((rawData: Conversation_I) => {
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

