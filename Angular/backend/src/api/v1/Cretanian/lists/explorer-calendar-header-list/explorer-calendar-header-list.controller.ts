import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../../utils/logger';

export class ExplorerCalendarHeaderListController {
    public data: object[] ;
    public data2: object[] ;
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
                date : '11',
                month : 'OCT',
                day : 'Today',
              },
              {
                date : '12',
                month : 'OCT',
                day : 'Tommorow',
              },
              {
                date : '13',
                month : 'OCT',
                day : 'Mon.',
              },
              {
                date : '14',
                month : 'OCT',
                day : 'Tue.',
              },
              {
                date : '15',
                month : 'OCT',
                day : 'Wed.',
              },
              {
                date : '16',
                month : 'OCT',
                day : 'Thu.',
              },
              {
                date : '17',
                month : 'OCT',
                day : 'Fri.',
              },
              {
                date : '18',
                month : 'OCT',
                day : 'Sat.',
              },
              {
                date : '19',
                month : 'OCT',
                day : 'Sun.',
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
