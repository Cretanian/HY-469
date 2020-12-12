import { Request, Response, NextFunction, Router } from "express";
import { NotFound, BadRequest } from "http-errors";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "../../../utils/logger";

export class ActivityController {
  public data: object[];
  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();
    router.get("/getAll", this.getAll);
    return router;
  }

  /**
   * Sens a message back as a response
   */
  public getMessage(req: Request, res: Response) {
    logger.info("E getMessage request print message");

    res.json({ message: "hello" });
  }

  constructor() {
    this.data = [
      {
        firstLine: "replied to YeetFleet",
        src: "../../../../assets/activitiesIcons/reply.png",
        hasSecondaryText: true,
        secondLine: "\'Haha... Welcome to the team @agantos!\'",
        personName: "Steli",
        date: "01/13",
        srcProfile: "../../../../assets/profile_photos/steli.png",
        redirect: '/explorer-mobile-team-conversation/YeetFleet/0'
      },
      {
        firstLine: "added you",
        src: "../../../../assets/activitiesIcons/added to team.png",
        hasSecondaryText: false,
        secondLine: "to team \'YeetFleet\'",
        personName: "ZackPer",
        date: "Mon",
        srcProfile: "../../../../assets/profile_photos/zackper.png",
        redirect: '/explorer-mobile-team-conversations/YeetFleet'
      },
      {
        firstLine: "added a file",
        src: "../../../../assets/activitiesIcons/file.png",
        hasSecondaryText: true,
        secondLine: "DnD | Reloaded: \'injury rules.pdf\'",
        personName: "agantos",
        date: "11/12",
        srcProfile: "../../../../assets/profile_photos/agantosProfile.png",
        redirection: '/explorer-mobile-team-conversations/DnD%20%7C%20Reloaded/1'
      },
    ];
  }

  /**
   * Broadcasts a received message to all connected clients
   */
  public getAll = (req: Request, res: Response) => {
    const person: string = req.body.message;
    res.send(this.data);
  };
}
