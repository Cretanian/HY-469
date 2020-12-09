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
                image: '../../../../assets/files/excel.png',
                name: 'ThisIsExcel.xcl',
                last_edit: 'Last Edited: 3/5',
                Favorites: '1',
                Team: '0',
            },
            {
                image: '../../../../assets/files/word.png',
                name: 'ThisIsWord.docx',
                last_edit: 'Last Edited: 8/10',
                Favorites: '0',
                Team: '0',
            },
               {
                image: '../../../../assets/files/pdf.png',
                name: 'ThisIsPDF.pdf',
                last_edit: 'Last Edited: 20/7',
                Favorites: '1',
                Team: '0',
            },
            {
                image: '../../../../assets/files/img.png',
                name: 'ThisIsPicture.png',
                last_edit: 'Last Edited: 10/11',
                Favorites: '0',
                Team: '0',
            },
            {
                image: '../../../../assets/files/powerpoint.png',
                name: 'ThisIsPowerpoint.png',
                last_edit: 'Last Edited: 6/9',
                Favorites: '0',
                Team: '0',
            },
            {
                image: '../../../../assets/files/word.png',
                name: 'ThisIsWord.docx',
                last_edit: 'Last Edited: 8/10',
                Favorites: '1',
                Team: 'YeetFleet',
            },
               {
                image: '../../../../assets/files/pdf.png',
                name: 'ThisIsPDF.pdf',
                last_edit: 'Last Edited: 20/7',
                Favorites: '0',
                Team: 'YeetFleet',
            },
            {
                image: '../../../../assets/files/img.png',
                name: 'ThisIsPicture.png',
                last_edit: 'Last Edited: 10/11',
                Favorites: '1',
                Team: 'YeetFleet',
            },
            {
                image: '../../../../assets/files/powerpoint.png',
                name: 'ThisIsPowerpoint.png',
                last_edit: 'Last Edited: 6/9',
                Favorites: '0',
                Team: 'YeetFleet',
            },
            {
                image: '../../../../assets/files/word.png',
                name: 'ThisIsWord.docx',
                last_edit: 'Last Edited: 8/10',
                Favorites: '1',
                Team: 'DnD | Reloaded',
            },
               {
                image: '../../../../assets/files/pdf.png',
                name: 'ThisIsPDF.pdf',
                last_edit: 'Last Edited: 20/7',
                Favorites: '1',
                Team: 'DnD | Reloaded',
            },
            {
                image: '../../../../assets/files/img.png',
                name: 'ThisIsPicture.png',
                last_edit: 'Last Edited: 10/11',
                Favorites: '0',
                Team: 'DnD | Reloaded',
            },
            {
                image: '../../../../assets/files/excel.png',
                name: 'ThisIsExcel.xcl',
                last_edit: 'Last Edited: 3/5',
                Favorites: '1',
                Team: 'DnD | Reloaded',
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
