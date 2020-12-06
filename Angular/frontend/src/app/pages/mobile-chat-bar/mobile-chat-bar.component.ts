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
  @Input('user') user: string = 'undef_user';

  @ViewChild('input', {static: false}) inputForm: ElementRef;
  @ViewChild('primaryButton', {static: false}) primaryButton: ElementRef;


  emojiIconSrc: string = '../../assets/emoji_icon.png';
  sendIconSrc: string = '../../assets/send_icon.png';

  sendIconActive: boolean = false;

  constructor(private messagesService: MessagesService) {
    this.user = 'Aldo Jhaco';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    document.addEventListener('keydown', this.UserTypingHandler)
  }

  UserTypingHandler = () => {
    setTimeout(() => {
      let form = this.inputForm.nativeElement;
      let input: string = form.value;
      if(input[0] != undefined)
        this.sendIconActive = true;
      else
        this.sendIconActive = false;
    }, 200)
  }

  sendInput(): void{
    let form = this.inputForm.nativeElement;
    let input: string = form.value;
  
    this.messagesService.sendMessage(
      {
        contact: this.contact,
        teamName: this.teamName,
        conversationID: this.conversationID
      },
      this.user,
      input
    ).subscribe( (data) => {
      form.value = '';
      this.sendIconActive = false;
    })
  }

}
