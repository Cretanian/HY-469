import { Request, Response, NextFunction, Router } from 'express';
import { NotFound, BadRequest } from 'http-errors';
import { DIContainer, MinioService, SocketsService } from '@app/services';
import { logger } from '../../../utils/logger';

export class ParticipantsController {
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

    constructor(){
        this.data = [
            {
              name: 'Zacharias Pervolarakis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png'
            },
            {
              name: 'Stylianos Stamatakis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png'
            },
            {
              name: 'Antonis Agapakis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png'
            },
            {
              name: 'Magkoyths Kwnstantinos',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png'
            },
            {
              name: 'Youla Faturu',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png'
            },
            {
              name: 'Savvidis Antonis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png'
            },
            {
              name: 'Leonidis Asterios',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/participants-mobile/sound-gray.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png'
            },
            
        ];
    }

    /**
     * Broadcasts a received message to all connected clients
     */
    public getAll = (req: Request, res: Response) => {
        res.send(this.data);       
    }

}
