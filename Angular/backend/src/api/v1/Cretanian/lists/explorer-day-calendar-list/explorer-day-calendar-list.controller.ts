import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../../utils/logger';

export class ExplorerDayCalendarListController {
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
            event : 'DND with the boys',
            time : '10:00 - 11:00',
          },
          {
            date : '11',
            month : 'OCT',
            event : 'Eat something',
            time : '15:00 - 16:00',
          },
          {
            date : '13',
            month : 'OCT',
            event : 'Study HY469',
            time : '19:00 - 21:00',
          },
          {
            date : '16',
            month : 'OCT',
            day : 'Thu.',
            event : 'DND again and again',
            time : '10:00 - 11:00',
          },
          {
            date : '16',
            month : 'OCT',
            day : 'Fri.',
            event : 'Running',
            time : '15:00 - 16:00',
          },
          {
            date : '16',
            month : 'OCT',
            day : 'Sat.',
            event : 'Cook soup',
            time : '10:00 - 11:00',
          },
          {
            date : '19',
            month : 'OCT',
            day : 'Sun.',
            event : 'DNDDDDDDDD',
            time : '10:00 - 11:00',
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
