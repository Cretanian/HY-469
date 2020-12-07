import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../utils/logger';

export class ChatHeadersController {
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
            .post('/getAll', this.getAll)
            .post('/getAll2', this.getAll2);
            
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
              header: 'Favorites',
            },
            {
              header: 'Chats',
            },
        ];
        this.data2 =[
            {
               image: '/assets/tv-speaker/user.png',
               name: 'ZackPer',
               last_msg: 'Ma pou eisai pia?',
               active_state: '/assets/tv-speaker/green.png',
               date: '10',
               Favorites: '1',
            }, 
            {
                image: '/assets/tv-speaker/user.png',
                name: 'Stelios stamatakis',
                last_msg: 'EEe to HY469 einai meme mathima..',
                active_state: '/assets/tv-speaker/green.png',
                date: '11',
                Favorites: '0',
             }, 
             {
                 image: '/assets/tv-speaker/user.png',
                 name: 'Elos',
                 last_msg: 'Variemai na kano tin anafora.',
                 active_state: '/assets/tv-speaker/green.png',
                 date: '11',
                 Favorites: '0',
              }, 
              {
                  image: '/assets/tv-speaker/user.png',
                  name: 'Trent Awooouu',
                  last_msg: 'Dnd pote? Avrio?',
                  active_state: '/assets/tv-speaker/green.png',
                  date: '11',
                  Favorites: '1',
               }, 
               {
                   image: '/assets/tv-speaker/user.png',
                   name: 'vAchilleas ',
                   last_msg: 'Grafika Grafika Grafika...',
                   active_state: '/assets/tv-speaker/green.png',
                   date: '11',
                   Favorites: '0',
                }
        ];
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public getAll = (req: Request, res: Response) => {
        const person: string = req.body.message;
        res.send(this.data);       

    }
    public getAll2 = (req: Request, res: Response) => {
        const person: string = req.body.message; 
        res.send(this.data2); 
    }

}
