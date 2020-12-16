import { DIContainer, SocketsService } from '@app/services';
import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../utils/logger';
import { ContactsController } from '../../contacts/contacts.controller';

export class InOutDevicesController {
    public data: any;
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
            .post('/getAll2', this.getAll2)
            .post('/setInput', this.setInput)
            .post('/setOutput', this.setOutput)
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
        this.data ={
            inputDevices: [
                {
                    name: 'Samsung TV',
                },
                {
                    name: 'Speaker Default',
                },
                {
                    name: 'Alexa',
                },
                {
                    name: 'Samsung A20e'
                }
            ],
            outputDevices: [
                {
                    name: 'Samsung TV',
                },
                {
                    name: 'Speaker Default',
                },
                {
                    name: 'Alexa',
                },
                {
                    name: 'Samsung A20e'
                },
                {
                    name: 'Smart Speaker T90'
                }
            ]    
        }

        this.data2 =[
            {
                in_volume: 75,
                out_volume: 75
            },
        ];

    }

    private BroadcastChanges(event: string, message: string): void{
        const socketService: SocketsService = DIContainer.get(SocketsService);
        socketService.broadcast(event, message);
    }

    public getAll = (req: Request, res: Response) => {
        const person: string = req.body.message;
        res.send(this.data);       
    }
    public getAll2 = (req: Request, res: Response) => {
        const person: string = req.body.message;
        res.send(this.data2);       
    }

    public setInput = (req: Request, res: Response) => {
        let inputDevice: string = req.body.selection;
        logger.info('input device: ' + inputDevice);
        for( let i = 0 ; i < this.data.inputDevices.length; i++){
            logger.info('iterate: ' + this.data.inputDevices[i]);
            if(this.data.inputDevices[i].name == inputDevice){
                logger.info('found it?!');
                this.data.inputDevices.splice(i, 1);
                this.data.inputDevices.unshift({name: inputDevice});
                this.BroadcastChanges('device/changed', '');
            }
        }
    }
    public setOutput = (req: Request, res: Response) => {
        let outputDevice: string = req.body.selection;
        for( let i = 0 ; i < this.data.outputDevices.length; i++){
            if(this.data.outputDevices[i].name == outputDevice){
                this.data.outputDevices.splice(i, 1);
                this.data.outputDevices.unshift({name: outputDevice});
                this.BroadcastChanges('device/changed', '');
            }
        }
    }
}
