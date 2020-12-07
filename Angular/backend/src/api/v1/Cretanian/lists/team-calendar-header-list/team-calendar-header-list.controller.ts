import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../../utils/logger';

export class TeamCalendarHeaderListController {
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
                team: 'YeetFleet',
                date : '16',
                month : 'OCT',
                day : 'Today',
              },
              {
                team: 'YeetFleet',
                date : '17',
                month : 'OCT',
                day : 'Tommorow',
              },
              {
                team: 'YeetFleet',
                date : '18',
                month : 'OCT',
                day : 'Mon.',
              },
              {
                team: 'YeetFleet',
                date : '19',
                month : 'OCT',
                day : 'Tue.',
              },
              {
                team: 'YeetFleet',
                date : '20',
                month : 'OCT',
                day : 'Wed.',
              },
              {
                team: 'YeetFleet',
                date : '21',
                month : 'OCT',
                day : 'Thu.',
              },
              {
                team: 'YeetFleet',
                date : '22',
                month : 'OCT',
                day : 'Fri.',
              },
              {
                team: 'YeetFleet',
                date : '23',
                month : 'OCT',
                day : 'Sat.',
              },
              {
                team: 'YeetFleet',
                date : '24',
                month : 'OCT',
                day : 'Sun.',
              },
              {
                team: 'DnD | Reloaded | Reloaded',
                date : '16',
                month : 'OCT',
                day : 'Today',
              },
              {
                team: 'DnD | Reloaded',
                date : '17',
                month : 'OCT',
                day : 'Tommorow',
              },
              {
                team: 'DnD | Reloaded',
                date : '18',
                month : 'OCT',
                day : 'Mon.',
              },
              {
                team: 'DnD | Reloaded',
                date : '19',
                month : 'OCT',
                day : 'Tue.',
              },
              {
                team: 'DnD | Reloaded',
                date : '20',
                month : 'OCT',
                day : 'Wed.',
              },
              {
                team: 'DnD | Reloaded',
                date : '21',
                month : 'OCT',
                day : 'Thu.',
              },
              {
                team: 'DnD | Reloaded',
                date : '22',
                month : 'OCT',
                day : 'Fri.',
              },
              {
                team: 'DnD | Reloaded',
                date : '23',
                month : 'OCT',
                day : 'Sat.',
              },
              {
                team: 'DnD | Reloaded',
                date : '24',
                month : 'OCT',
                day : 'Sun.',
              },
              {
                team: 'AMI Living Room',
                date : '16',
                month : 'OCT',
                day : 'Today',
              },
              {
                team: 'AMI Living Room',
                date : '17',
                month : 'OCT',
                day : 'Tommorow',
              },
              {
                team: 'AMI Living Room',
                date : '18',
                month : 'OCT',
                day : 'Mon.',
              },
              {
                team: 'AMI Living Room',
                date : '19',
                month : 'OCT',
                day : 'Tue.',
              },
              {
                team: 'AMI Living Room',
                date : '20',
                month : 'OCT',
                day : 'Wed.',
              },
              {
                team: 'AMI Living Room',
                date : '21',
                month : 'OCT',
                day : 'Thu.',
              },
              {
                team: 'AMI Living Room',
                date : '22',
                month : 'OCT',
                day : 'Fri.',
              },
              {
                team: 'AMI Living Room',
                date : '23',
                month : 'OCT',
                day : 'Sat.',
              },
              {
                team: 'AMI Living Room',
                date : '24',
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
