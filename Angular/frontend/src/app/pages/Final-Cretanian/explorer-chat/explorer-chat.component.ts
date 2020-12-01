import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer-chat',
  templateUrl: './explorer-chat.component.html',
  styleUrls: ['./explorer-chat.component.css']
})
export class ExplorerChatComponent implements OnInit {
  chats_array:chats[] = [
    {
      "header" : 'Favorites'
    },
    {
      "header" : "Chats"
    }
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
class chats{
  header:string;
  constructor() { 
    this.header ='';
  }
}