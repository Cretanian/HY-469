import { Request, Response, NextFunction, Router } from 'express';


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
              src2: '../../../assets/profile_photos/zackper.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png',
              team: 'YeetFleet'
            },
            {
              name: 'Stylianos Stamatakis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/steli.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png',
              team: 'YeetFleet'
            },
            {
              name: 'Antonis Agapakis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/agantosProfile.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Magkoyths Kwnstantinos',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png',
              team: 'YeetFleet'
            },
            {
              name: 'Youla Faturu',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Savvidis Antonis',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-gray.png',
              team: 'YeetFleet'
            },
            {
              name: 'Leonidis Asterios',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/asterios2.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Giorgos Georgioy',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Kwstas Oman',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Giannhs Iowannoy',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Maria yas',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Cool Dude',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            },
            {
              name: 'Notcool Dude',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'YeetFleet'
            }, 
            {
              name: 'DM',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'DnD | Reloaded'
            }, 
            {
              name: 'Ernon (?)',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'DnD | Reloaded'
            }, 
             {
              name: 'Thrasttusss',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'DnD | Reloaded'
            }, 
            {
              name: 'Balidor Lokiar',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'DnD | Reloaded'
            }, 
            {
              name: 'Trent aaawooooooo',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'DnD | Reloaded'
            }, 
            {
              name: 'Elos The Smallbrainer',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'DnD | Reloaded'
            }, 
            {
              name: 'Pepas Brother',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'AMI Living Room'
            }, 
            {
              name: 'Pepa the Pig',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'AMI Living Room'
            }, 
            {
              name: 'Katerinio',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'AMI Living Room'
            }, 
            {
              name: 'Mariori',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'AMI Living Room'
            }, 
            {
              name: 'Panagos',
              src1: '../../../assets/participants-mobile/chat-gray.png',
              src2: '../../../assets/profile_photos/profile_picture.png',
              src3: '../../../assets/participants-mobile/microphone-muted.png',
              team: 'AMI Living Room'
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
