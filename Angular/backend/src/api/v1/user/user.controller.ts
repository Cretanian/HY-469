import { Request, Response, NextFunction, Router } from "express";
import { NotFound, BadRequest } from "http-errors";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "../../../utils/logger";
import { ContactsController } from "../contacts/contacts.controller";

interface User_I {
  ip: string;
  username: string;
  profile: string;
}

export class UserController {
  public data: User_I[];

  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */

  public applyRoutes(): Router {
    const router = Router();
    router
      .post("/getUserData", this.getUserData)
      .post("/setUserIP", this.setUserIP)
      .post('/acceptCall', this.acceptCall);
    return router;
  }

  constructor() {
    this.data = [
      {
        ip: "",
        username: "agantos",
        profile: "agantosProfile.png",
      },
      {
        ip: "",
        username: "Stylianos Stamatakis",
        profile: "steli.png",
      },
      {
        ip: "",
        username: "ZackPer",
        profile: "zackper.png",
      },
    ];
  }

  private BroadcastChanges(event: string, message: string): void{
    const socketService: SocketsService = DIContainer.get(SocketsService);
    socketService.broadcast(event, message);
  }

  public setUserIP = (req: Request, res: Response) => {
    const ip: string = req.body.ip;
    const username: string = req.body.username;

    this.data.forEach((element: User_I) => {
      if (element.username == username) {
        element.ip = ip;
        logger.info("Setting USER': " + username + " ip to ' " + ip + " '");
      } else if (element.ip == ip) {
        logger.info("removing ip from :" + element.username);
        element.ip = "";
      }
    });
    res.send("200");
    return;
  };

  /**
   * Broadcasts a received message to all connected clients
   */
  public getUserData = (req: Request, res: Response) => {
    let ip: string = req.body.ip;

    this.data.forEach((element: User_I) => {
      if (element.ip == ip) {
        res.send(element);
        logger.info("Sending element with ip: " + ip);
        return;
      }
    });

    return;
  };

  public acceptCall = (req: Request, res: Response) => {
    logger.info('broadcasting');
    this.BroadcastChanges('call/accept', '');
    res.send('200');
  };
}
