import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Message } from '../../Final-Cretanian/conversations/conversations.component';
import { Location } from '@angular/common';
import { MessagesService } from '../../../global/services/messages/messages.service'
import { SocketsService } from 'src/app/global/services';
import { UserService } from '../../../global/services/user/user.service'
import { IpService  } from '../../../global/services/user/ip.service'
import { map } from "rxjs/operators";

interface User_I{
  ip: string,
  username: string,
  profile: string
}

@Component({
  selector: 'tv-chat',
  templateUrl: './tv-chat.component.html',
  styleUrls: ['./tv-chat.component.scss']
})
export class TvChatComponent {
  @Input('contact') contact: string;

  @Input('teamName') teamName: string;
  @Input('conversationID') conversationID: number;

  
  @ViewChild('mainContainer', {static: false}) mainContainer: ElementRef;

  user: User_I;
  messages: Message[];

  extrasOpened: boolean = false;

  constructor(
      private messagesService: MessagesService,
      private userService: UserService,
      private ipService: IpService,
      private _location: Location,
      private socketService: SocketsService
    ) 
  {}

  ngOnInit(): void{
    this.ipService.getIPAddress().subscribe(
      (data: any) => {
         this.userService.getUserData(data.ip).subscribe(
           (data: User_I) => {
             this.user = data;
             this.loadMessages()
           }
         )
      }
    )

    this.socketService.syncMessages('messages/change').subscribe(
      (event) => {
        console.log('Event arrived! Event message: ' + event.message);
        if(event.message == (this.contact || this.teamName)){
          this.loadMessages();
        }
      }
    )
  }

  loadMessages(): any{
    let request;
    if(this.contact != undefined)
      this.loadContactMessages().subscribe(rawData => {this.setMessages(rawData)});
    else
      this.loadTeamConversationMessages().subscribe(rawData => {this.setMessages(rawData)});
  }

  setMessages(rawData: any){
    let data: Message[] = rawData.messages;

    this.messages = [];
    for(let i = 0; i < data.length; i++){
      this.messages[i] = new Message(data[i]);
      if(this.messages[i].name == this.user.username){
        console.log('alignment: ' + this.messages[i].alignment);
        this.messages[i].alignment = 'right';
        this.messages[i].photo = '';
      }
    };
  }

  loadContactMessages(){
    return this.messagesService.getMessagesFrom(this.contact);
  }

  loadTeamConversationMessages(){
    console.log('team: ' + this.teamName, ' id: ' + this.conversationID );
    return this.messagesService.getTeamConversation(this.teamName, this.conversationID);
  }

  backClicked() {
    this._location.back();
  }
  
}

