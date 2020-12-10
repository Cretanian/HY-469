export class Pin{
    user: string;
    comment: string;

    // image, message, conversation-preview, event, file
    type: string;

    //Value can be:
    // -src, for images,
    // -Message, for messages,
    // -{message1: Message, message2: Message} for conversation-preview,
    // -event things of stelios, for event.
    value: any; 

    constructor(user: string, comment: string, type: string, value: any){
        this.user = user;
        this.comment = comment;
        this.type = type;
        this.value = value;
    }

    
}