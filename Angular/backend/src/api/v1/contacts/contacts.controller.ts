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
              isFavourite: true,
            },
            {
              name: 'Andreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Bllos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'bntonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'cndreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'dllos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'entonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'endreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Fllos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Gntonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Endreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'fllos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'gntonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Hndreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Illos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Kntonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Lndreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Mllos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Nntonis Agapakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
            {
              name: 'Ondreas Lenakakis',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: true,
            },
            {
              name: 'Pllos enas malakas',
              srcProfile: '../../../../assets/icons/TV Grid 1 Grid.png',
              isFavourite: false,
            },
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
