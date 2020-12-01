import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Input ('header') header: string;

  chat_array:chat[] = [
    {
      "image" : '/assets/tv-speaker/user.png',
      "name" : "Stelios stamatakis",
      "last_msg" : "Ela re stam poy eosao re man",
      "active_state" : "/assets/tv-speaker/green.png"
    },
    {
      "image" : "/assets/tv-speaker/user.png",
      "name" : "Stelios stamatakis",
      "last_msg" : "Ela re stam poy eosao re man",
      "active_state" : "/assets/tv-speaker/green.png"
    },
    {
      "image" : "/assets/tv-speaker/user.png",
      "name" : "Stelios stamatakis",
      "last_msg" : "Ela re stam poy eosao re man",
      "active_state" : "/assets/tv-speaker/green.png"
    },
    {
      "image" : "/assets/tv-speaker/user.png",
      "name" : "Stelios stamatakis",
      "last_msg" : "Ela re stam poy eosao re man",
      "active_state" : "/assets/tv-speaker/green.png"
    },
    {
      "image" : "/assets/tv-speaker/user.png",
      "name" : "Stelios stamatakis",
      "last_msg" : "Ela re stam poy eosao re man",
      "active_state" : "/assets/tv-speaker/green.png"
    }
    ]; 
  constructor() { }

  ngOnInit(): void {
  }

}

class chat{
  image:string;
  name:string;
  last_msg:string;
  active_state:string;
  constructor() { 
    this.image ='';
    this.name ='';
    this.active_state ='';
    this.last_msg ='';
  }
}