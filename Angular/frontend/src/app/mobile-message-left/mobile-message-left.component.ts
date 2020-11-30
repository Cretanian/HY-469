import { Component, Input, OnInit } from '@angular/core';
import { NbInputModule } from '@nebular/theme';

@Component({
  selector: 'mobile-message-left',
  templateUrl: './mobile-message-left.component.html',
  styleUrls: ['./mobile-message-left.component.css']
})
export class MobileMessageLeftComponent implements OnInit {

  @Input('photo') senderPhoto: string;
  @Input('name') senderName: string;
  @Input('message') messageSent: string;l
  @Input('time') timeSent: string;
  
  emojis: HTMLElement[];

  constructor() { 
    this.emojis = [];
    this.emojis.push() 
  }

  ngOnInit(): void {
  }

}
