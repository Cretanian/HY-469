import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MessagesService } from '../../global/services/messages/messages.service'

@Component({
  selector: 'mobile-chat-bar',
  templateUrl: './mobile-chat-bar.component.html',
  styleUrls: ['./mobile-chat-bar.component.css']
})
export class MobileChatBarComponent {
  @Input('contact') contact: string;
  @Input('teamName') teamName: string;
  @Input('conversationID') conversationID: number;

  @ViewChild('input', {static: false}) inputForm: ElementRef;
  @ViewChild('primaryButton', {static: false}) primaryButton: ElementRef;

  emojiIconSrc: string = '../../assets/emoji_icon.png';
  sendIconSrc: string = '../../assets/send_icon.png';

  sendIconActive: boolean = false;

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    document.addEventListener('keydown', this.UserTypingHandler)
  }

  UserTypingHandler = () => {
    console.log('detected input!');
    let form = this.inputForm.nativeElement;
    let input: string = form.value;
    if(input.length > 0)
      this.sendIconActive = true;
    else
      this.sendIconActive = false;
  }


  sendInput(): void{
    let form = this.inputForm.nativeElement;
    let input: string = form.value;
  
    console.log('this.inputForm.value: ' + input);
    this.messagesService.sendMessage(
      {
        contact: this.contact,
        teamName: this.teamName,
        conversationID: this.conversationID
      },
      input
    ).subscribe( (data) => {
      this.inputForm.value = '';
    })
  }

}
