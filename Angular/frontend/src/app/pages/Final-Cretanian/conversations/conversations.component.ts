import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConversationPreview_I, Conversation_I, ContactMessages_I, Message_I } from '../../../../../../backend/src/api/v1/messages/messages.controller'
import { MessagesService } from "../../../global/services/messages/messages.service"

@Component({
  selector: "app-conversations",
  templateUrl: "./conversations.component.html",
  styleUrls: ["./conversations.component.css"],
})
export class ConversationsComponent implements OnInit {
  conversations: Array<Conversation>;
  moreOpen: boolean = false;
  accountMenuOpen: boolean = false;

  @Input() Team_name: string;

  constructor(private messagesService: MessagesService, private _Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.Team_name = this._Activatedroute.snapshot.paramMap.get("team_name");

    this.messagesService.getTeamConversations(this.Team_name).subscribe((data: ConversationPreview_I[]) => {
      this.conversations = [];
      for (let i: number = 0; i < data.length; i++) {
        let id: number = data[i].id;
        let message1: Message = new Message(data[i].message1);
        let message2: Message = new Message(data[i].message2);
        this.conversations.push(new Conversation(id, message1, message2));
      }
    })
  }

  enableMore() {
    this.moreOpen = true;
  }

  disableMore() {
    this.moreOpen = false;
  }

  enableAccountMenu() {
    this.accountMenuOpen = true;
  }

  disableAccountMenu() {
    this.accountMenuOpen = false;
  }
}

class Conversation {
  id: number;
  initialMessage: Message;
  replyMessage: Message;

  constructor(id: number, message1: Message, message2: Message) {
    this.id = id;
    this.initialMessage = message1;
    this.replyMessage = message2;
  }
}

export class Reaction {
  amount: number;
  emojiSrc: string;

  constructor(amount: number, emojiSrc: string) {
    this.amount = amount;
    this.emojiSrc = emojiSrc;
  }
}

export class Message {
  id: number;
  photo: string;
  name: string;
  time: string;
  message: string;
  alignment: string;
  emojis: Reaction[];

  constructor(json: Message_I) {
    this.id = json.id;
    this.photo = json.photo;
    this.name = json.name;
    this.time = json.time;
    this.message = json.message;
    if (json.alignment == undefined) this.alignment = "left";
    else this.alignment = json.alignment;

    let emojis: Reaction[] = [];
    console.log("nani");
    if (json.emojis != undefined)
      for (let i = 0; i < json.emojis.length; i++) {
        console.log("Hallo?! reactions: " + json.emojis[i].amount);
        emojis[i] = new Reaction(
          json.emojis[i].amount,
          json.emojis[i].emojiSrc
        );
      }
    this.emojis = emojis;
  }
}
