import { Component,Input, OnInit } from '@angular/core';
import { ChatHeadersService } from 'src/app/global/services/Cretanian/chat-headers/explorer-teams.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent{
  @Input ('header') header: string;
  @Input ('chat') chat: chat_list[];
}


class chat_list{
  image:string;
  name:string;
  last_msg:string;
  active_state:string;
  date:string;
  Favorites:string;
  constructor() { 
    this.image ='';
    this.name ='';
    this.active_state ='';
    this.last_msg ='';
    this.date ='';
    this.Favorites ='';
  }
}