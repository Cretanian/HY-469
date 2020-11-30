import { Request, Response, NextFunction, Router } from 'express';
import { DIContainer, SocketsService } from '@app/services';
import { NO_CONTENT } from 'http-status-codes';

export class SocketEventsController {

  /**
   * Apply all routes for socket events
   * POST /socket-events/broadcast/:event   Broadcasts an event to all clients
   *
   * @returns {Router}
   */
  public applyRoutes(): Router {
    const router = Router();

    router.post('/broadcast/:event', this.broadcast());

    return router;
  }

  /**
   * Broadcasts an event to all clients
   */
  public broadcast() {
    return async (req: Request, res: Response, next?: NextFunction): Promise<Response> => {
      try {
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast(req.params.event, req.body);

        return res.sendStatus(NO_CONTENT);

      } catch (e) {
        next(e);
      }
    };
  }

}
