import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../../utils/logger';

export class SmarthomeListController {
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
              iconSrc: '../../../../assets/teams-button/TeamIcon.png',
              groupName: 'AMI Living Room',
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
