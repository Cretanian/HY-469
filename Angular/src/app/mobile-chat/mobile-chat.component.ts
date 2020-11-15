import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mobile-chat',
  templateUrl: './mobile-chat.component.html',
  styleUrls: ['./mobile-chat.component.css']
})
export class MobileChatComponent {

  @ViewChild('chatBar') chatBarRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  onScroll(event: any){
    if(this.chatBarRef == undefined){
      console.log('Chat bar is not defined in angular');
      return;
    }

    // this.chatBarRef.nativeElement.style.position = 'sticky';
  }
}
