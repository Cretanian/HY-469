import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../utils/logger';

export class InOutDevicesController {
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
                name: 'Samsung TV',
            },
            {
                name: 'Speaker Default',
            },
            {
                name: 'Alexa',
            },
        ];

        this.data2 =[
            {
                in_volume: 75,
                out_volume: 75
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
    public getAll2 = (req: Request, res: Response) => {
        const person: string = req.body.message;
        res.send(this.data2);       
    }
}
