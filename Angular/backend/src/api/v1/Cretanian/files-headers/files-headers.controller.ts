import { Request, Response, NextFunction, Router } from 'express';
import { logger } from '../../../../utils/logger';

export class FilesHeadersController {
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
                header: 'Recent',
                icon: '../../../../assets/files/show.png',
            },
            {
                header: 'Favorites',
                icon: '../../../../assets/files/show.png',
            },
        ];

        this.data2 =[
            {
                image: '../../../../assets/files/show.png',
                name: 'cat.xl',
                last_edit: '50/11',
                Favorites: '1',
                Team: 'YeetFleet',
            },
            {
                image: '../../../../assets/files/show.png',
                name: 'cat.pdf',
                last_edit: '10/11',
                Favorites: '0',
                Team: '0',
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
