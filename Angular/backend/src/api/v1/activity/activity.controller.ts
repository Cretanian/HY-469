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
        firstLine: "added you",
        src: "../../../../assets/activitiesIcons/added to team.png",
        hasSecondaryText: false,
        secondLine: "to Team Zoume",
        personName: "ZackPer",
        date: "Mon",
        srcProfile: "../../../../assets/profile_photos/zackper.png",
      },
      {
        firstLine: "replied",
        src: "../../../../assets/activitiesIcons/reply.png",
        hasSecondaryText: true,
        secondLine: "HY486 Principles of Distributed ... > Group 3",
        personName: "Steli",
        date: "01/13",
        srcProfile: "../../../../assets/profile_photos/steli.png",
      },
      {
        firstLine: "added a file",
        src: "../../../../assets/activitiesIcons/file.png",
        hasSecondaryText: true,
        secondLine: "HY486 Principles of Distributed ... > Group 3",
        personName: "agantos",
        date: "11/12",
        srcProfile: "../../../../assets/profile_photos/agantosProfile.png",
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
