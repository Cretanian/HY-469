import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class ContactsController {
    public data: object[] ;
    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */

    public applyRoutes(): Router {
        const router = Router();       
        router
            .post('/getAll', this.getAll);
        return router;
    }

    /**
     * Sens a message back as a response
     */
    public getMessage(req: Request, res: Response) {
        logger.info('E getMessage request print message');
        res.json({ message: 'hello' });
    }
    
    constructor(){
        this.data =[
            {
              name: 'Antonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Zacharias Pervolarakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: true,
            },
            {
              name: 'Stelios Stamatakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: true,
            },
            {
              name: 'Youla Fatouroy',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Asterios Lewnidhs',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'CS',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Manolis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Dude',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Guy',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Person',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Dudette',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            }
        ];
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public getAll = (req: Request, res: Response) => {
        const person: string = req.body.message;
        logger.info(this.data);
        res.send(this.data);
      }

}
