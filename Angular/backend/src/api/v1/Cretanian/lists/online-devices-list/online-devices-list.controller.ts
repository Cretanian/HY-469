import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../../utils/logger';

export class OnlineDevicesListController {
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
                icon: '../../../../assets/online-devices/device_active.png',
                name: 'LG Smart TV',
            },
            {
                icon: '../../../../assets/online-devices/device_active.png',
                name: 'Smart Table',
            },
            {
                icon: '../../../../assets/online-devices/device_deactive.png',
                name: 'Alexa',
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
