import { Component, OnInit } from '@angular/core';
import { ChatHeadersService } from 'src/app/global/services/Cretanian/chat-headers/explorer-teams.service';
import { MessagesService } from '../../../global/services/messages/messages.service'

@Component({
  selector: 'app-explorer-chat',
  templateUrl: './explorer-chat.component.html',
  styleUrls: ['./explorer-chat.component.css']
})
export class ExplorerChatComponent implements OnInit {
  chat: Chat[];
  headers:chat_header[];
  chat_list:chat_list[];

  constructor(private chatheadersService: ChatHeadersService, private messagesService:MessagesService) {}

  ngOnInit(): void {
    this.chat = new Array();
    for(let i = 0; i<2; i++){
      this.chat.push(new Chat());
    }
    
    this.chatheadersService.getAll("asd").subscribe(data => {
      this.headers = data as chat_header[]; 
      this.chat[0].header = this.headers[0].header;
      this.chat[1].header = this.headers[1].header;
    });

    this.chatheadersService.getAll2("asd").subscribe(data => {
      this.chat_list = data as chat_list[];
      this.chat[0].set_param_chat(this.chat_list, '1' );
      this.chat[1].set_param_chat(this.chat_list, '0' );
      
      //TODO: Add zack's last (this can easily be done for everyone with a forloop)
      this.messagesService
        .getMessagesFrom(this.chat[0].chat_list[0].name)
        .subscribe((data: any) => {
          let messages = data.messages;
          let lastMessage = messages[messages.length - 1];
          this.chat[0].chat_list[0].last_msg = lastMessage.message;
        });
    });
  }
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
class chat_header{
  header:string;
  constructor() { 
    this.header ='';
  }
}

class Chat{
  header: string;
  chat_list: chat_list[] = [];

  constructor(){}

  set_param_chat(chats_list_param: chat_list[], fav:string) {

    for (let i = 0; i < chats_list_param.length; i++) {
      if(chats_list_param[i].Favorites === fav)
      {
        this.chat_list.push(chats_list_param[i]);
      }
    }

  }
}
