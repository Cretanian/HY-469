import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from '../Final-Cretanian/conversations/conversations.component';
import {Location} from '@angular/common';

@Component({
  selector: 'mobile-chat',
  templateUrl: './mobile-chat.component.html',
  styleUrls: ['./mobile-chat.component.css']
})
export class MobileChatComponent {
  @ViewChild('chatBar', {static:true}) chatBarRef: ElementRef;

  data = [
    {
      photo: 'profile_picture.png',
      name:  'Steli',
      time: '12:25',
      message: 'DnD session twice per week. Please.',
      alignment: 'left',
      emojis: [
        {
          amount: 2,
          emojiSrc: 'skeptical_icon.png'
        }
      ]
    },
    {
      photo: 'profile_picture.png',
      name:  'Steli',
      time: '12:25',
      message: 'For the love of god. Hear me out. I-NEED-THIS. Zack needs this. PLEAAAASE. PLLLLLEEEEAAASEEE.',
      alignment: 'left',
      emojis: []
    },
    {
      photo: '',
      name:  'agantos',
      time: '22:20',
      message: '*cries in DM*.',
      alignment: 'right',
      emojis: [
        {
          amount: 1,
          emojiSrc: 'skeptical_icon.png'
        }
      ]
    }
  ]

  messages: Message[];

  extrasOpened: boolean = false;

  constructor(private _location: Location) 
  {}

  ngOnInit(): void{
    this.messages = [];
    for(let i = 0; i < this.data.length; i++){
      this.messages[i] = new Message(this.data[i]);
      //Fix photo path.
      this.messages[i].photo = '../../../assets/' + this.data[i].photo;
    }
  }

  backClicked() {
    this._location.back();
  }

  openExtras($event?): void{
    this.extrasOpened = true;
  }

  closeExtras($event?): void{
    this.extrasOpened = false;
  }
  
  onScroll(event: any){
    if(this.chatBarRef == undefined){
      console.log('Chat bar is not defined in angular');
      return;
    }

    // this.chatBarRef.nativeElement.style.position = 'sticky';
  }
}

