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

  messages: Message[] = [
    new Message('../../assets/profile_picture.png', 'China Guy', '13:50','Random Shit about some random shit asdasdas asdaa we sda sd sd asd  sadasd a', 'left'),
    new Message('', 'Asterios', '13:52', 'Oh thats so intresting! We have to take a more HCI approach in this issue tho. Lets try to do it again!', 'right')
  ]

  extrasOpened: boolean = false;

  onScroll(event: any){
    if(this.chatBarRef == undefined){
      console.log('Chat bar is not defined in angular');
      return;
    }

    // this.chatBarRef.nativeElement.style.position = 'sticky';
  }

  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
  openExtras($event?): void{
    this.extrasOpened = true;
  }

  closeExtras($event?): void{
    this.extrasOpened = false;
  }

}

