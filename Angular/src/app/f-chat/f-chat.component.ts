import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-chat',
  templateUrl: './f-chat.component.html',
  styleUrls: ['./f-chat.component.css']
})
export class FChatComponent implements OnInit {
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