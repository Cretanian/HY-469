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

export class TVController {
  /**
   * Apply all routes for example
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();
    router
      .post("/changeGrid", this.changeGrid)
      
    return router;
  }

  public teamMessages: TeamMessages_I[];
  public contactMessages: ContactMessages_I[];

  private BroadcastChanges(event: string, message: string): void{
    const socketService: SocketsService = DIContainer.get(SocketsService);
    socketService.broadcast(event, message);
  }

  public changeGrid = (req: Request, res: Response) => {
    const grid: number = req.body.gridID;
    logger.info('TVControlle>> Changing to: ' + grid);
    this.BroadcastChanges('tv/grid', "" + grid);
    res.send('200');
  }

}
