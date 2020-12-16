import { Request, Response, NextFunction, Router } from "express";
import { NotFound, BadRequest } from "http-errors";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "../../../utils/logger";
import { ContactsController } from "../contacts/contacts.controller";

export interface TeamMessages_I{
  teamName: string,
  conversations: Conversation_I[]
}

export interface Conversation_I{
  teamName?: string,
  isOnCall?: boolean,
  id: number,
  messages: Message_I[]
}

export interface ConversationPreview_I{
  id: number,
  message1: Message_I,
  message2: Message_I,
  isOnCall?: boolean
}

export interface ContactMessages_I {
  contact: string,
  messages: Message_I[]
}

export interface Message_I {
  id: number,
  photo: string,
  name: string,
  time: string,
  message: string,
  alignment: string,
  emojis: {
    amount: number,
    emojiSrc: string
  }[];
}

export class MessagesController {
  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();
    router
      .post("/getTeamConversation", this.getTeamConversation)
      .post("/getTeamConversations", this.getTeamConversations)
      .post("/getMessagesFrom", this.getMessagesFrom)
      .post("/reactTo", this.reactTo)
      .post("/sendMessage", this.sendMessage)
      
    return router;
  }

  public teamMessages: TeamMessages_I[];
  public contactMessages: ContactMessages_I[];

  constructor() {
    this.contactMessages = [
      {
        contact: "steli",
        messages: [
          {
            id: 0,
            photo: "steli.png",
            name: "steli",
            time: "Today at 12:25",
            message: "DnD session twice per week. Please.",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "skeptical_icon.png",
              },
            ],
          },
        ],
      },
      {
        contact: "ZackPer",
        messages: [
          {
            id: 0,
            photo: "zackper.png",
            name: "ZackPer",
            time: "Today at 12:25",
            message:
              "Eukolo tha elega.",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
        ],
      },
      {
        contact: "vAchilleas",
        messages: [
          {
            id: 0,
            photo: "profile_picture.png",
            name: "vAchilleas",
            time: "Today at 9:25",
            message:
              "Phra kati nomismata simera. Den fantazesai, treli agora!",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
        ],
      },
      {
        contact: "agantos",
        messages: [
          {
            id: 0,
            photo: "agantosProfile.png",
            name: "agantos",
            time: "Yesterday at 10:25",
            message:
              "DnD got canceled boys. Can I have all the sad reacts of the world?",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
        ],
      },
      {
        contact: "Asterios Leonidis",
        messages: [
          {
            id: 0,
            photo: "asterios.png",
            name: "Asterios Leonidis",
            time: "THU at 10:25",
            message:
              "Pixel perfect ola paidia.",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
        ],
      },
      {
        contact: "steli",
        messages: [
          {
            id: 0,
            photo: "steli.png",
            name: "steli",
            time: "Today at 6:45",
            message:
              "Variemai na kanw tin anafora.",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "skeptical_icon.png",
              },
            ],
          },
        ],
      },
      
    ];

    this.teamMessages = [
      {
        teamName: 'YeetFleet',
        conversations: [
          {
            id: 0,
            messages: [
              {
                id: 0,
                photo: 'zackper.png',
                name: 'ZackPer',
                time: 'WED at 11:03',
                message: "Everybody welcome to the team our newest member, Antonis Agapakis!",
                alignment: 'left',
                emojis: [
                  {
                    amount: 8,
                    emojiSrc: 'hearts_for_eyes_icon.png'
                  },
                  {
                    amount: 2,
                    emojiSrc: 'thumbs_up_icon.png'
                  }
                ]
              },
              {
                id: 1,
                photo: 'steli.png',
                name: 'steli',
                time: 'WED at 11:23',
                message: "Haha... Welcome to the team @agantos",
                alignment: 'left',
                emojis: []
              },
              {
                id: 2,
                photo: 'asterios.png',
                name: 'Asterios Leonidis',
                time: 'THU at 14:32',
                message: "Welcome agantos, we expect great things from you!",
                alignment: 'left',
                emojis: [
                  {
                    amount: 3,
                    emojiSrc: 'hearts_for_eyes_icon.png'
                  }
                ]
              },
            ]
          },
          {
            id: 1,
            messages: [
              {
                id: 0,
                photo: 'profile_picture.png',
                name: 'Chin Yasuo',
                time: 'Yesterday at 13:32',
                message: "Hello everyone! Dont forget to send me your monthly progress reports.",
                alignment: 'left',
                emojis: [
                  {
                    amount: 3,
                    emojiSrc: 'hearts_for_eyes_icon.png'
                  },
                  {
                    amount: 1,
                    emojiSrc: 'thumbs_up_icon.png'
                  }
                ]
              },
              {
                id: 1,
                photo: 'steli.png',
                name: 'steli.png',
                time: 'Yesterday at 12:03',
                message: "Already sent!",
                alignment: 'left',
                emojis: []
              },
              {
                id: 2,
                photo: 'agantosProfile.png',
                name: 'agantos',
                time: 'Today at 9:32',
                message: "You got it sir.",
                alignment: 'left',
                emojis: [
                  {
                    amount: 1,
                    emojiSrc: 'tears_of_joy_icon.png'
                  }
                ]
              },
            ]
          },
          {
            id: 2,
            isOnCall: true,
            messages: [
              {
                id: 0,
                photo: 'asterios.png',
                name: 'Asterios Leonidis',
                time: 'Today at 10:32',
                message: "Lets talk about your HY486 projects!",
                alignment: 'left',
                emojis: [
                  {
                    amount: 3,
                    emojiSrc: 'hearts_for_eyes_icon.png'
                  },
                  {
                    amount: 1,
                    emojiSrc: 'thumbs_up_icon.png'
                  }
                ]
              },
              {
                id: 1,
                photo: 'profile_picture.png',
                name: 'Chin Yasuo',
                time: 'Today at 10:33',
                message: "Feel free to ask questions!",
                alignment: 'left',
                emojis: []
              },
              {
                id: 2,
                photo: 'zackper.png',
                name: 'ZackPer',
                time: 'Today at 10:35',
                message: "Can we use CGI for the video presentation?",
                alignment: 'left',
                emojis: [
                  {
                    amount: 1,
                    emojiSrc: 'tears_of_joy_icon.png'
                  }
                ]
              },
              {
                id: 1,
                photo: 'profile_picture.png',
                name: 'Chin Yasuo',
                time: 'Today at 10:35',
                message: "There will be no bonus but feel free to do so!",
                alignment: 'left',
                emojis: []
              },
              {
                id: 3,
                photo: 'agantosProfile.png',
                name: 'agantos',
                time: 'Today at 10:36',
                message: "Can we make it as simplistic as it can be and still get the full grade?",
                alignment: 'left',
                emojis: [
                  {
                    amount: 1,
                    emojiSrc: 'tears_of_joy_icon.png'
                  }
                ]
              },
              {
                id: 3,
                photo: 'asterios.png',
                name: 'Asterios Leonidis',
                time: 'Today at 10:37',
                message: "Of course. The video's purpose is for us to get a basic grasp of what you have already implemented.",
                alignment: 'left',
                emojis: [
                  {
                    amount: 1,
                    emojiSrc: 'tears_of_joy_icon.png'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }


  private BroadcastChanges(event: string, message: string): void{
    const socketService: SocketsService = DIContainer.get(SocketsService);
    socketService.broadcast(event, message);
  }

  public sendMessage = (req: Request, res: Response) => {
    const destination: any = req.body.destination;
    const sender: string = req.body.sender;
    const senderPhoto: string = req.body.senderPhoto;
    const message: string = req.body.message;

    let date: Date = new Date();

    logger.info('message: ' + message);

    let newMessage: Message_I ;
    let messages = this.findMessages(destination);
    logger.info('messages: length' + message.length);
    const time: string = date.getHours() + ":" + date.getMinutes();

    newMessage = {
      name: sender,
      photo: senderPhoto,
      time: "Today at " + time,
      message: message,
      id: messages.length,
      alignment: 'left',
      emojis: []
    }
    messages.push(newMessage);
    this.BroadcastChanges('messages/change', destination.contact || destination.teamName)
    res.send("200");
  }

  public getTeamConversation = (req: Request, res: Response) => {
    const teamName: string = req.body.teamName;
    const conversationID: number = req.body.conversationID;

    let team = this.findTeam(teamName);
    for(let i = 0; i < team.conversations.length; i++){
      if(conversationID == team.conversations[i].id){
        team.conversations[i].teamName = teamName; // fill team name for reacts to know were to post.
        res.send(team.conversations[i]);
        return;
      }
    }

    res.send(undefined);
  }

  public getTeamConversations = (req: Request, res: Response) => {
    const teamName: string = req.body.teamName;
    let data: ConversationPreview_I[] = [];
    
    let team = this.findTeam(teamName);
    let conversations = team.conversations;
    for(let j = 0; j < conversations.length; j++){
      data.push({
        id: conversations[j].id,
        isOnCall: conversations[j].isOnCall,
        message1: conversations[j].messages[0],
        message2: conversations[j].messages[conversations[j].messages.length - 1]
      })
    }


    res.send(data);
  }

  public getMessagesFrom = (req: Request, res: Response) => {
    const contact: string = req.body.contact;
    logger.info('Get Messages From: ' + contact);
    for (let i = 0; i < this.contactMessages.length; i++) {
      if (this.contactMessages[i].contact == contact) {
        res.send(this.contactMessages[i]);
        return;
      }
    }
    res.send(404);
  };

  public reactTo = (req: Request, res: Response) => {
    const destination: any = req.body.destination;
    const messageID: number = req.body.messageID;
    const emojiSr: string = req.body.emojiSrc;

    let message: Message_I = this.findMessage(destination, messageID);
    
    let increasedFlag: boolean = false;

    for(let i = 0; i < message.emojis.length; i++){
      if(emojiSr == message.emojis[i].emojiSrc){
        ++message.emojis[i].amount;
        increasedFlag = true;
      }
    }
    if(increasedFlag == false){
      message.emojis.push({
        amount: 1,
        emojiSrc: emojiSr
      })
    }

    //Broadcast changes.
    logger.info(destination.contact || destination.teamName);
    this.BroadcastChanges('messages/change', destination.contact || destination.teamName)

    res.send(201);
    return;
  }

  //~~~~~~~~~~~~~~~~
  private findTeam(teamName: string): TeamMessages_I{
    for(let i = 0; i < this.teamMessages.length; i++){
      if(this.teamMessages[i].teamName == teamName)
        return this.teamMessages[i];
    }

    return undefined;
  }

  private findContact(contact: string): ContactMessages_I{
    for(let i = 0; i < this.contactMessages.length; i++){
      if(this.contactMessages[i].contact == contact)
        return this.contactMessages[i];
    }

    return undefined;
  }

  private findMessage(destination: any, messageID: number): Message_I{
    const messages: Message_I[] = this.findMessages(destination);
    return messages[messageID];
  }

  private findMessages(destination: any): Message_I[]{
    const contact = destination.contact;
    logger.info('contact: ' + contact);
    if(contact != undefined){
      let contactMessages = this.findContact(contact);
      return contactMessages.messages;
    }
    else{ //Team message
      let teamName = destination.teamName;
      let conversationID = destination.conversationID;
      logger.info('teamname: ' + teamName);
      let team = this.findTeam(teamName)

      for(let i = 0; i < team.conversations.length; i++){
        if(conversationID == team.conversations[i].id)
          return team.conversations[i].messages;
      }
    }
  }
}
