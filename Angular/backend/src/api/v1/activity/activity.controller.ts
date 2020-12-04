import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class ActivityController {
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

    /**
     * Sens a message back as a response
     */
    public getMessage(req: Request, res: Response) {
        logger.info('E getMessage request print message');

        res.json({ message: 'hello' });
    }

    constructor(){
        this.data = [      
            {
              firstLine: 'added you', 
              src: '../../../../assets/activitiesIcons/added to team.png',
              hasSecondaryText: false,
              secondLine: 'to Team Zoume',
              personName: 'Young Guy',
              date: 'Mon',
              srcProfile: '../../../../assets/profilePics/young guy.png',
            },
            {
              firstLine: 'replied', 
              src: '../../../../assets/activitiesIcons/reply.png',
              hasSecondaryText: true,
              secondLine: 'HY486 Principles of Distributed ... > Group 3',
              personName: 'Old Lady +3',
              date: '01/13',
              srcProfile: '../../../../assets/profilePics/old lady.png',
            },
            {
              firstLine: 'added a file', 
              src: '../../../../assets/activitiesIcons/file.png',
              hasSecondaryText: true,
              secondLine: 'HY486 Principles of Distributed ... > Group 3',
              personName: 'Giorno',
              date: '11/12',
              srcProfile: '../../../../assets/profilePics/I HAVE A DREAM.png',
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
