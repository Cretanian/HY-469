import { Component, OnInit } from '@angular/core';
import { ChatHeadersService } from 'src/app/global/services/Cretanian/chat-headers/explorer-teams.service';

@Component({
  selector: 'app-explorer-chat',
  templateUrl: './explorer-chat.component.html',
  styleUrls: ['./explorer-chat.component.css']
})
export class ExplorerChatComponent implements OnInit {
  chats_array:chats[];

  constructor(private chatheadersService: ChatHeadersService) {}

  ngOnInit(): void {

    this.chatheadersService.getAll("asd").subscribe(data => {
        this.chats_array = data as chats[];
    });

  }
}
class chats{
  header:string;
  constructor() { 
    this.header ='';
  }
}