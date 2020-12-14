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
        name: "Zacharias Pervolarakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Stylianos Stamatakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Antonis Agapakis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Magkoyths Kwnstantinos",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Youla Faturu",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Savvidis Antonis",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Leonidis Asterios",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Giorgos Georgioy",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Kwstas Oman",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Giannhs Iowannoy",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Maria yas",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Cool Dude",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
      },
      {
        name: "Notcool Dude",
        src1: "../../../assets/participants-mobile/chat-gray.png",
        src2: "../../../assets/participants-mobile/sound-gray.png",
        src3: "../../../assets/participants-mobile/microphone-gray.png",
        isMuted: false,
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
