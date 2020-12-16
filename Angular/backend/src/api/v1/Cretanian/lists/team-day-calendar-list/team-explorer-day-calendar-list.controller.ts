import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../../utils/logger';

export class TeamDayCalendarListController {
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
          team: '0',
          date : '11',
          month : 'OCT',
          event : 'DND with the boys',
          time : '10:00 - 11:00',
          color: '#918255',
        },
        {
          team: '0',
          date : '11',
          month : 'OCT',
          event : 'Eat something',
          time : '15:00 - 16:00',
          color: '#162534',
        },
        {
          team: '0',
          date : '13',
          month : 'OCT',
          event : 'Study HY469',
          time : '19:00 - 21:00',
          color: '#465312',
        },
          {
            team: 'YeetFleet',
            date : '16',
            month : 'OCT',
            event : 'DND with the boys',
            time : '10:00 - 11:00',
            color: '#696969',
          },
          {
            team: '0',
            date : '16',
            month : 'OCT',
            day : 'Fri.',
            event : 'Running',
            time : '11:30 - 13:00',
            color: '#236511',
          },
          {
            team: '0',
            date : '16',
            month : 'OCT',
            day : 'Thu.',
            event : 'Eat soup',
            time : '14:00 - 15:00',
            color: '#112932',
          },
          {
            team: 'YeetFleet',
            date : '16',
            month : 'OCT',
            event : 'Tennis With the boys',
            time : '17:00 - 19:00',
            color: '#34568B',
          },
          {
            team: 'YeetFleet',
            date : '16',
            month : 'OCT',
            event : 'Study HY460 and chill',
            time : '20:00 - 21:00',
            color: '#FF6F61',
          },
          {
            team: '0',
            date : '16',
            month : 'OCT',
            day : 'Sat.',
            event : 'Club, jk Corona is here',
            time : '23:00 - 00:00',
            color: '#542962',
          },
          {
            team: 'DnD | Reloaded',
            date : '17',
            month : 'OCT',
            day : 'Thu.',
            event : 'DND again and again',
            time : '10:00 - 11:00',
            color: '#821576',
          },
          {
            team: 'YeetFleet',
            date : '17',
            month : 'OCT',
            event : 'Eat something',
            time : '15:00 - 16:00',
            color: '#88B04B',
          },
          {
            team: 'YeetFleet',
            date : '18',
            month : 'OCT',
            event : 'Eat something',
            time : '15:00 - 16:00',
            color: '#F7CAC9',
          },
          {
            team: 'YeetFleet',
            date : '18',
            month : 'OCT',
            event : 'Eat something',
            time : '15:00 - 16:00',
            color: '#92A8D1',
          },
          {
            team: '0',
            date : '19',
            month : 'OCT',
            day : 'Sun.',
            event : 'DNDDDDDDDD',
            time : '10:00 - 11:00',
            color: '#123456',
          },
          {
            team: 'DnD | Reloaded',
            date : '19',
            month : 'OCT',
            day : 'Sun.',
            event : 'DNDDDDDDDD',
            time : '18:00 - 20:00',
            color: '#465792',
          },
          {
            team: 'YeetFleet',
            date : '23',
            month : 'OCT',
            event : 'GO FOR A WALK',
            time : '12:00 - 14:00',
            color: '#955251',
          },
          {
            team: 'DnD | Reloaded',
            date : '23',
            month : 'OCT',
            day : 'Fri.',
            event : 'DNDDD',
            time : '15:00 - 16:00',
            color: '#659371',
          },
          {
            team: 'DnD | Reloaded',
            date : '23',
            month : 'OCT',
            day : 'Sat.',
            event : 'Cook soup',
            time : '19:00 - 20:00',
            color: '#371598',
          },
          {
            team: 'YeetFleet',
            date : '20',
            month : 'OCT',
            event : 'Eat something',
            time : '15:00 - 16:00',
            color: '#B565A7',
          },
          {
            team: 'YeetFleet',
            date : '20',
            month : 'OCT',
            event : 'GYM TIME',
            time : '18:00 - 20:00',
            color: '#009B77',
          },
          {
            team: 'DnD | Reloaded',
            date : '20',
            month : 'OCT',
            event : 'Study HY469',
            time : '19:00 - 21:00',
            color: '#768805',
          },
          {
            team: 'YeetFleet',
            date : '20',
            month : 'OCT',
            event : 'MOVIE TIME',
            time : '22:00 - 00:00',
            color: '#DD4124',
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
