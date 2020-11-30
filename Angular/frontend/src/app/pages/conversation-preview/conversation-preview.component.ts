import { Component, ViewChild, Input, OnInit, ElementRef } from '@angular/core';
import { Message } from '../Final-Phone/conversations/conversations.component';


@Component({
  selector: 'conversation-preview',
  templateUrl: './conversation-preview.component.html',
  styleUrls: ['./conversation-preview.component.css']
})
export class ConversationPreviewComponent {

  @Input('initialMessage') initialMessage: Message;
  @Input('replyMessage') replyMessage: Message;

  @ViewChild('initialMessageRef') initialMessageRef: ElementRef;
  @ViewChild('replyMessageRef') replyMessageRef: ElementRef;

  constructor(){
    
  }

  ngOnInit(): void{
    if(this.initialMessage == undefined){
      console.log('CP: message is undef');
    }
  }

  ngAfterViewInit(): void{
    
    
  }
}
