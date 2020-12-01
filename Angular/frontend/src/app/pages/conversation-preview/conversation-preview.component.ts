import { Component, ViewChild, Input, OnInit, ElementRef } from '@angular/core';
import { Message } from '../Final-Cretanian/conversations/conversations.component';


@Component({
  selector: 'conversation-preview',
  templateUrl: './conversation-preview.component.html',
  styleUrls: ['./conversation-preview.component.css']
})
export class ConversationPreviewComponent {

  @Input('initialMessage') initialMessage: Message;
  @Input('replyMessage') replyMessage: Message;

  @ViewChild('initialMessageRef', {static:true}) initialMessageRef: ElementRef;
  @ViewChild('replyMessageRef', {static:true}) replyMessageRef: ElementRef;

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
