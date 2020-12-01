import { Component, OnInit } from '@angular/core';
import { ConversationMessagePreviewComponent } from 'src/app/pages/conversation-message-preview/conversation-message-preview.component';


@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  conversations: Array<Conversation>;
  moreOpen: boolean = false;
  accountMenuOpen: boolean = false;
  

  constructor() {}

  ngOnInit(): void {
    this.conversations = new Array<Conversation>(1);
    // Array == []
    this.conversations[0] = new Conversation(
                              new Message('profile_picture.png', 'China Guy', '12:25', 'Have you EVER seen a koala? They are SUPPPER cute lmao.', '', [new Reaction(2, 'skeptical_icon.png')] as Reaction[]),
                              new Message('profile_picture.png', 'Asterios', '13:32', 'Damnnn I\'ve never seen one up close!.', '', [new Reaction(1, 'hearts_for_eyes_icon.png')] as Reaction[])
                            );

    this.conversations[1] = new Conversation(
                              new Message('profile_picture.png', 'HCI Lab', '12:25', 'Good morning EVERYBODY! Lets grind this company to the heavens! <3', '', [new Reaction(2, 'skeptical_icon.png')] as Reaction[]),
                              new Message('profile_picture.png', 'Stylianos Stamatakis', '13:32', 'Stfu boss. You are cringy. #noshame', '', [new Reaction(1, 'hearts_for_eyes_icon.png')] as Reaction[])
                            );
                            
  }

  enableMore(){
    this.moreOpen = true;
  }

  disableMore(){
    this.moreOpen = false;
  }

  enableAccountMenu(){
    this.accountMenuOpen = true;
  }

  disableAccountMenu(){
    this.accountMenuOpen= false;
  }

}



class Conversation{
  initialMessage: Message;
  replyMessage: Message;

  constructor(initialMessaga: Message, replyMessage: Message){
    this.initialMessage = initialMessaga;
    this.replyMessage = replyMessage;
  }
}

export class Reaction{
  amount: number;
  emojiSrc: string;

  constructor(amount: number, emojiSrc: string){
    this.amount = amount;
    this.emojiSrc = emojiSrc;
  }
}

export class Message{
  photo: string;
  name: string;
  time: string;
  message: string;
  alignment: string;
  emojis: Reaction[];

  constructor (photo:string, name: string, time:string, message:string, alignment?: string, emojis?: Reaction[]){
    this.photo = photo;
    this.name = name;
    this.time = time;
    this.message = message;
    if(alignment == undefined)
      this.alignment = 'left'
    else
      this.alignment = alignment;
    this.emojis = emojis;
  }
}