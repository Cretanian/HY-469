import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class TvGridController {
    public data: object[] ;
    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();       
        router
            .get('/getAll', this.getAll);
        return router;
    }

    constructor(){
        this.data = [
            {
              title: '1 Main',
              src: './assets/tv-grid/1 Main.png',
              id: 0
            },
            {
              title: '1 Main + Chat',
              src: './assets/tv-grid/1 Main + Chat.png',
              id: 1
            },
            {
              title: '3 Main',
              src: './assets/tv-grid/3 Main.png',
              id: 2
            },
            {
              title: '2x2 Main + Chat',
              src: './assets/tv-grid/2x2 Main + Chat.png',
              id: 3
            },
            {
              title: '3x3 main',
              src: './assets/tv-grid/3x3 main.png',
              id: 4
            },
          ];
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public getAll = (req: Request, res: Response) => {
        const person: string = req.body.message;
        res.send(this.data);       
    }

}
