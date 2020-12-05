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
  id: number,
  messages: Message_I[]
}

export interface ConversationPreview_I{
  id: number,
  message1: Message_I,
  message2: Message_I
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
      .post("/reactTo", this.reactTo);
      
    return router;
  }

  public teamMessages: TeamMessages_I[];
  public contactMessages: ContactMessages_I[];

  constructor() {
    this.contactMessages = [
      {
        contact: "Stylianos Stamatakis",
        messages: [
          {
            id: 0,
            photo: "profile_picture.png",
            name: "Steli",
            time: "12:25",
            message: "DnD session twice per week. Please.",
            alignment: "left",
            emojis: [
              {
                amount: 2,
                emojiSrc: "skeptical_icon.png",
              },
            ],
          },
          {
            id: 1,
            photo: "profile_picture.png",
            name: "Steli",
            time: "12:25",
            message:
              "For the love of god. Hear me out. I-NEED-THIS. Zack needs this. PLEAAAASE. PLLLLLEEEEAAASEEE.",
            alignment: "left",
            emojis: [],
          },
          {
            id: 2,
            photo: "",
            name: "agantos",
            time: "22:20",
            message: "*cries in DM*.",
            alignment: "right",
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
        contact: "Zacharias Pervolarakis",
        messages: [
          {
            id: 0,
            photo: "profile_picture.png",
            name: "Zack",
            time: "12:25",
            message: "Bro I am telling you... Aramastus is a fucking castle.",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
          {
            id: 1,
            photo: "",
            name: "agantos",
            time: "12:26",
            message:
              "But... this makes no sense. Why the fuck does he have to be a castle? All the clues are layed out. You are just dumm.",
            alignment: "right",
            emojis: [
              {
                amount: 1,
                emojiSrc: "skeptical_icon.png",
              },
            ],
          },
          {
            id: 2,
            photo: "profile_picture.png",
            name: "Zack",
            time: "13:05",
            message:
              "You aint fooling me DM. I can tell when the fuck you are lying Mr. 'Third impostor'! I JUST CONFIRMED THAT ARAMASTUS IS A CASTLE",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "winky_face_icon.png",
              },
            ],
          },
        ],
      },
      {
        contact: "AMI Lab",
        messages: [
          {
            id: 0,
            photo: "profile_picture.png",
            name: "Asterios Leonidis",
            time: "12:25",
            message:
              "Good job everybody! Next time lets so a little bit more spirit, we are all having a blast here arent we?",
            alignment: "left",
            emojis: [
              {
                amount: 4,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
          {
            id: 1,
            photo: "profile_picture.png",
            name: "Mallias/Rockas",
            time: "12:25",
            message:
              "Wraia paidia kapoios an blastarei ton asterio mipws? Kathe fora ta idia leme.",
            alignment: "left",
            emojis: [
              {
                amount: 1,
                emojiSrc: "hearts_for_eyes_icon.png",
              },
            ],
          },
          {
            id: 2,
            photo: "profile_picture.png",
            name: "CS",
            time: "12:25",
            message:
              "Σου εχω πει πολλες φορες να μιλας πιο ομορφα Μαλλια. Ειδικα στο παιδι μου τον Αστεριο και στις κορες μου. Προσεχε.",
            alignment: "left",
            emojis: [
              {
                amount: 4,
                emojiSrc: "thumbs_up_icon.png",
              },
            ],
          },
          {
            id: 3,
            photo: "profile_picture.png",
            name: "Mallias/Rockas",
            time: "12:25",
            message:
              "Με συγχωρειτε κυριε CS. Δεν ηξερα οτι ειστε σε αυτο το τσατ. Σας διαβεβαιωνω οτι πρωτη και τελευταια φορα που συμπεριφερομαι ετσι ακοσμα. Καλη σας συνεχεια. Επομενη φορα θα παμε ακομα καλυτερα ομαδα!",
            alignment: "left",
            emojis: [],
          },
          {
            id: 4,
            photo: "",
            name: "agantos",
            time: "12:25",
            message:
              "Μα καλα πηγε:( Ας μην μαλωνουμε! Θα κανω εδω μεταπτυχιακο οποτε ηρεμηστε!",
            alignment: "right",
            emojis: [
              {
                amount: 2,
                emojiSrc: "hearts_for_eyes_icon.png",
              },
              {
                amount: 5,
                emojiSrc: "tears_of_joy_icon.png",
              },
            ],
          },
        ],
      },
    ];

    this.teamMessages = [
      {
        teamName: 'ZoomE',
        conversations: [
          {
            id: 0,
            messages: [
              {
                id: 0,
                photo: 'profile_picture.png',
                name: 'China Guy',
                time: '11:03',
                message: "Have you EVER seen a koala? They are SUPPERRR cute lmao!",
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
                photo: 'profile_picture.png',
                name: 'Stylianos Stamatakis',
                time: '11:03',
                message: "Yes... like 1m times from youtube. Why are you all so cringy today? ZACK GET ME OUT OF HERE.",
                alignment: 'left',
                emojis: []
              },
              {
                id: 2,
                photo: 'profile_picture.png',
                name: 'Asterios Leonidis',
                time: '14:32',
                message: "Oh my god never in my life haha! They must be SUPER cute!",
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
                name: 'Aldo Jhaco',
                time: '11:03',
                message: "Telikos fanatic, opoios thelei join sto spiti mou gia nargile negroi.",
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
                name: 'Stylianos Stamatakis',
                time: '11:03',
                message: "Lets go!",
                alignment: 'left',
                emojis: []
              },
              {
                id: 2,
                photo: 'profile_picture.png',
                name: 'agantos',
                time: '14:32',
                message: "Ti lol re kathusterimene, 2020 exoume",
                alignment: 'left',
                emojis: [
                  {
                    amount: 5,
                    emojiSrc: 'tears_of_joy_icon.png'
                  }
                ]
              },
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

  private findMessage(destination: any, messageID: number): Message_I{
    const contact = destination.contact;
    logger.info('contact: ' + contact);
    if(contact != undefined){
      let contactMessages = this.findContact(contact);

      for(let i = 0; i < contactMessages.messages.length; i++){
        if(messageID == contactMessages.messages[i].id)
          return contactMessages.messages[i];
      }
    }
    else{ //Team message
      let teamName = destination.teamName;
      let conversationID = destination.conversationID;
      logger.info('teamname: ' + teamName);
      let team = this.findTeam(teamName)

      for(let i = 0; i < team.conversations.length; i++){
        if(conversationID == team.conversations[i].id)
          for(let j = 0; j < team.conversations[i].messages.length; j++)
            if(messageID == team.conversations[i].messages[j].id)
              return team.conversations[i].messages[j];
      }
    }
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
}
