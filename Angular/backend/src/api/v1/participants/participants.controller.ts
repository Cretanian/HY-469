import { Request, Response, NextFunction, Router } from "express";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "@app/utils/logger";
export class ParticipantsController {
  public data: Array<any>;
  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();
    router
      .get("/getAll", this.getAll)
      .post("/muteParticipant", this.muteParticipant);
    return router;
  }

  constructor() {
    this.data = [
      {
        name: 'Zacharias Pervolarakis',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/zackper.png',
        src3: '../../../assets/participants-mobile/microphone-gray.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Stylianos Stamatakis',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/steli.png',
        src3: '../../../assets/participants-mobile/microphone-gray.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Antonis Agapakis',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/agantosProfile.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Magkoyths Kwnstantinos',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-gray.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Youla Faturu',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Savvidis Antonis',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-gray.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Leonidis Asterios',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/asterios2.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Giorgos Georgioy',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Kwstas Oman',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Giannhs Iowannoy',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Maria yas',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Cool Dude',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      },
      {
        name: 'Notcool Dude',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'YeetFleet',
        isMuted: false
      }, 
      {
        name: 'DM',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'DnD | Reloaded',
        isMuted: false
      }, 
      {
        name: 'Ernon (?)',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'DnD | Reloaded',
        isMuted: false
      }, 
       {
        name: 'Thrasttusss',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'DnD | Reloaded',
        isMuted: false
      }, 
      {
        name: 'Balidor Lokiar',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'DnD | Reloaded',
        isMuted: false
      }, 
      {
        name: 'Trent aaawooooooo',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'DnD | Reloaded',
        isMuted: false
      }, 
      {
        name: 'Elos The Smallbrainer',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'DnD | Reloaded',
        isMuted: false
      }, 
      {
        name: 'Pepas Brother',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'AMI Living Room',
        isMuted: false
      }, 
      {
        name: 'Pepa the Pig',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'AMI Living Room',
        isMuted: false
      }, 
      {
        name: 'Katerinio',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'AMI Living Room',
        isMuted: false
      }, 
      {
        name: 'Mariori',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'AMI Living Room',
        isMuted: false
      }, 
      {
        name: 'Panagos',
        src1: '../../../assets/participants-mobile/chat-gray.png',
        src2: '../../../assets/profile_photos/profile_picture.png',
        src3: '../../../assets/participants-mobile/microphone-muted.png',
        team: 'AMI Living Room',
        isMuted: false
      }, 
    ];
  }

  /**
   * Broadcasts a received message to all connected clients
   */
  public getAll = (req: Request, res: Response) => {
    res.send(this.data);
  };

  public muteParticipant = (req: Request, res: Response) => {
    let name: string = req.body.name;
    logger.info(req.body);
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].name == name)
        this.data[i].isMuted = !this.data[i].isMuted;
    }

    // Sending a broadcast message to all clients
    const socketService = DIContainer.get(SocketsService);
    socketService.broadcast("participants/change", "change");

    res.send("200");
  };
}
