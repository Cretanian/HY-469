import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MessagesService } from '../../global/services/messages/messages.service'
import { UserService } from '../../global/services/user/user.service'
import { IpService  } from '../../global/services/user/ip.service'

interface User_I{
  ip: string,
  username: string,
  profile: string
}

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

  user: User_I;
  emojiIconSrc: string = '../../assets/emoji_icon.png';
  sendIconSrc: string = '../../assets/send_icon.png';

  sendIconActive: boolean = false;

  constructor(
    private messagesService: MessagesService,
    private userService: UserService,
    private ipService: IpService
  ) 
  {}

  ngOnInit(): void {
    this.ipService.getIPAddress().subscribe(
      (data: any) => {
         this.userService.getUserData(data.ip).subscribe(
           (data: User_I) => {
             this.user = data;
           }
         )
      }
    )
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

  keyPress($event: any){
    let form = this.inputForm.nativeElement;
    let input: string = form.value;
    if(input[0] != undefined && event.keyCode == 13){
      this.sendInput();
      this.sendIconActive = false;
    }
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
      this.user.username,
      this.user.profile,
      input
    ).subscribe( (data) => {
      form.value = '';
      this.sendIconActive = false;
    })
  }

}
