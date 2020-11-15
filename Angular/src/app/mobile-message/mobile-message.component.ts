import { Component, ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { NbInputModule } from '@nebular/theme';

@Component({
  selector: 'mobile-message',
  templateUrl: './mobile-message.component.html',
  styleUrls: ['./mobile-message.component.css']
})
export class MobileMessageComponent {

  @Input('photo') senderPhoto: string;
  @Input('name') senderName: string;
  @Input('message') messageSent: string;l
  @Input('time') timeSent: string;
  @Input('alignment') alignment: string;
  
  @ViewChild('mainContainer') mainContainerRef: ElementRef;
  @ViewChild('senderContainer') senderContainerRef: ElementRef;

  emojis: HTMLElement[];

  constructor() { 
    
  }

  ngAfterViewInit(): void{
    if(this.alignment == 'left'){
      this.mainContainerRef.nativeElement.style.alignItems = 'flex-start';
      this.senderContainerRef.nativeElement.style.justifyContent = "flex-start";
    }
    else if(this.alignment == 'right'){
      this.mainContainerRef.nativeElement.style.alignItems = 'flex-end';
      this.senderContainerRef.nativeElement.style.justifyContent = "flex-end";
    }
  }

}
