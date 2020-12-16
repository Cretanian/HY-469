import { Request, Response, NextFunction, Router } from "express";
import { DIContainer, MinioService, SocketsService } from "@app/services";
import { logger } from "@app/utils/logger";
export class selfInformationController {
  public data: Array<any>;
  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();
    router.get("/getAll", this.getAll).post("/muteSelf", this.muteSelf);
    return router;
  }

  constructor() {
    this.data = [{ name: "Antonis Agapakis", isMuted: false }];
  }

  /**
   * Broadcasts a received message to all connected clients
   */
  public getAll = (req: Request, res: Response) => {
    res.send(this.data);
  };

  public muteSelf = (req: Request, res: Response) => {
    this.data[0].isMuted = !this.data[0].isMuted;
    // Sending a broadcast message to all clients
    const socketService = DIContainer.get(SocketsService);
    socketService.broadcast("selfInformation/change", "change");

    res.send("200");
  };
}
