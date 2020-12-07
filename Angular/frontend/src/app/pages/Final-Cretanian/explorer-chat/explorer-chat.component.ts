import { Component, OnInit } from '@angular/core';
import { ChatHeadersService } from 'src/app/global/services/Cretanian/chat-headers/explorer-teams.service';

@Component({
  selector: 'app-explorer-chat',
  templateUrl: './explorer-chat.component.html',
  styleUrls: ['./explorer-chat.component.css']
})
export class ExplorerChatComponent implements OnInit {
  chat: Chat[];
  headers:chat_header[];
  chat_list:chat_list[];

  constructor(private chatheadersService: ChatHeadersService) {}

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
      }else{
        console.log("this.TRash");
      }
    }
    console.log(this.chat_list);
  }
}
