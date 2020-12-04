import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactMessages_I, Message_I } from '../../../../../../backend/src/api/v1/messages/messages.controller'

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

  constructor(private _Activatedroute: ActivatedRoute) {}

  data = [
    {
      message1: {
        photo: "profile_picture.png",
        name: "China Guy",
        time: "12:25",
        message: "Have you EVER seen a koala? They are SUPPPER cute lmao.",
        alignment: "",
        emojis: [
          {
            amount: 8,
            emojiSrc: "hearts_for_eyes_icon.png",
          },
          {
            amount: 2,
            emojiSrc: "thumbs_up_icon.png",
          },
        ],
      },
      message2: {
        photo: "profile_picture.png",
        name: "Asterios Leonidis",
        time: "12:27",
        message: "Oh my god never in my life haha! They must be SUPER cute!.",
        emojis: [
          {
            amount: 3,
            emojiSrc: "hearts_for_eyes_icon.png",
          },
        ],
      },
    },
    {
      message1: {
        photo: "profile_picture.png",
        name: "AMI Lab",
        time: "14:25",
        message: "Great work everybody on your projects so far, keep it up!",
        alignment: "",
        reactions: [],
      },
      message2: {
        photo: "profile_picture.png",
        name: "Stylianos Stamatakis",
        time: "14:35",
        message: "STFU boss. You are getting cringy.",
        alignment: "",
        reactions: [],
      },
    },
  ];

  ngOnInit(): void {
    this.Team_name = this._Activatedroute.snapshot.paramMap.get("team_name");

    //Dynamically load conversations from base!
    this.conversations = [];
    for (let i: number = 0; i < this.data.length; i++) {
      let message1: Message = new Message(this.data[i].message1);
      let message2: Message = new Message(this.data[i].message2);
      this.conversations.push(new Conversation(message1, message2));
    }
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
  initialMessage: Message;
  replyMessage: Message;

  constructor(message1: Message, message2: Message) {
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
