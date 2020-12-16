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
      .post("/muteParticipant", this.muteParticipant)
      .post("/changeVolumeParticipant", this.changeVolumeParticipant)
      .post('/getParticipantVolume', this.getParticipantVolume);
    return router;
  }

  constructor() {
    this.data = [
      {
        name: "Zacharias Pervolarakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/zackper.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Stylianos Stamatakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/steli.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Antonis Agapakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/agantosProfile.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Magkoyths Kwnstantinos",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Youla Faturu",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Savvidis Antonis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Leonidis Asterios",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/asterios2.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Giorgos Georgioy",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Kwstas Oman",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Giannhs Iowannoy",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Maria yas",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Cool Dude",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Notcool Dude",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "YeetFleet",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "DM",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "DnD | Reloaded",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Ernon (?)",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "DnD | Reloaded",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Thrasttusss",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "DnD | Reloaded",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Balidor Lokiar",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "DnD | Reloaded",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Trent aaawooooooo",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "DnD | Reloaded",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Elos The Smallbrainer",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "DnD | Reloaded",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Pepas Brother",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "AMI Living Room",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Pepa the Pig",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "AMI Living Room",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Katerinio",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "AMI Living Room",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Mariori",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "AMI Living Room",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
      {
        name: "Panagos",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/profile_photos/profile_picture.png",
        src3: "../../../assets/participants-mobile/microphone-muted.png",
        team: "AMI Living Room",
        isMuted: false,
        volume: 75,
        prevVolume: 75,
      },
    ];
  }

  private BroadcastChanges(event: string, message: string): void{
    const socketService: SocketsService = DIContainer.get(SocketsService);
    socketService.broadcast(event, message);
  }
  
  public getAll = (req: Request, res: Response) => {
    res.send(this.data);
  };

  public muteParticipant = (req: Request, res: Response) => {
    let name: string = req.body.name;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].name == name) {
        this.data[i].isMuted = !this.data[i].isMuted;
      }
    }
    // Sending a broadcast message to all clients
    const socketService = DIContainer.get(SocketsService);
    socketService.broadcast("participants/change", "change");

    res.send("200");
  };

  public changeVolumeParticipant = (req: Request, res: Response) => {
    let name: string = req.body.name;
    let volume: number = req.body.volume;
    let prevVolume: number = req.body.prevVolume;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].name == name) {
        if (volume == 0) {
          this.data[i].prevVolume = prevVolume;
          this.data[i].volume = volume;
          this.data[i].isMuted = true;
        } else {
          this.data[i].volume = volume;
          this.data[i].isMuted = false;
        }

        this.BroadcastChanges('participant/' + name + '/volume', '' + volume);
      }
    }

    // Sending a broadcast message to all clients
    const socketService = DIContainer.get(SocketsService);
    socketService.broadcast("participants/change", "change");

    res.send("200");
  };

  public getParticipantVolume = (req: Request, res: Response) => {
    let name: string = req.body.name;

    this.data.forEach((element: any) => {
      if(element.name == name){
        res.send({ volume: element.volume });
        return;
      }
    })

    res.send('404');
  }
}
