import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';
import { Pin } from './Pin';

export class PinboardController {

    /**
     * Apply all routes for example
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();

        router
            .get('/getAll', this.getAll)
            .post('/addPin', this.addPin)

        return router;
    }


    private data: Pin[];
    constructor(){
        this.data = [
            {
                user: 'China Guy',
                comment: 'Good morning everybody!',
                type: 'image',
                value: 'good_morning.png'
            },
            {
                user: 'Asterios Leonidis',
                comment: 'Really important!',
                type: 'message',
                value: {
                    id: 0,
                    photo: 'asterios.png',
                    name: 'Asterios Leonidis',
                    time: '11:15',
                    message: 'Everybody dont forget to use real data on your mockups!',
                    alignment: 'left',
                    emojis: [],
                }
            }
        ]
    }

    public getAll = (req: Request, res: Response) => {
        res.send(this.data);
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public addPin = (req: Request, res: Response) => {
        let pin: Pin = req.body.pin;

        if(pin.type == 'message')
            pin.value.alignment = 'left';

        this.data.push(pin);

        // Sending a broadcast message to all clients
        const socketService = DIContainer.get(SocketsService);
        socketService.broadcast('pinboard/change', 'change');

        res.send('200');
    }

}
