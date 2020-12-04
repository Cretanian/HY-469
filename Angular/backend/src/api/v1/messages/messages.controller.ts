import { Request, Response, NextFunction, Router } from "express";
import { NotFound, BadRequest } from "http-errors";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "../../../utils/logger";
import { ContactsController } from "../contacts/contacts.controller";

export interface ContactMessages_I {
  contact: string;
  messages: Message_I[];
}

export interface Message_I {
  id: number;
  photo: string;
  name: string;
  time: string;
  message: string;
  alignment: string;
  emojis: {
    amount: number;
    emojiSrc: string;
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
      .post("/getMessagesFrom", this.getMessagesFrom)
      .post("/reactTo", this.reactTo);
      
    return router;
  }

  public data: ContactMessages_I[];

  constructor() {
    this.data = [
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
  }


  private BroadcastChanges(contact: string): void{
    const socketService: SocketsService = DIContainer.get(SocketsService);
    socketService.broadcast('messages/change', contact);
  }

  public getMessagesFrom = (req: Request, res: Response) => {
    const contact: string = req.body.contact;
    logger.info('Get Messages From: ' + contact);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].contact == contact) {
        res.send(this.data[i]);
        return;
      }
    }
    res.send(404);
  };

  public reactTo = (req: Request, res: Response) => {
    logger.info('nai geia sas? eena emoji thelw na valw?');
    const contact: string = req.body.contact;
    const messageID: number = req.body.messageID;
    const emojiSrc: string = req.body.emojiSrc;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].contact == contact) {
        for (let j = 0; j < this.data[i].messages[messageID].emojis.length; j++) {
          if (this.data[i].messages[messageID].emojis[j].emojiSrc == emojiSrc) {
            this.data[i].messages[messageID].emojis[j].amount++;
            res.send('200');
            this.BroadcastChanges(contact);
            return;
          }
        }

        this.data[i].messages[messageID].emojis.push({
          amount: 1,
          emojiSrc: emojiSrc,
        });
        break;
      }
    }

    this.BroadcastChanges(contact);
    res.send('200');
  };
}
