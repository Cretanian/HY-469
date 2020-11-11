export class Message{
    firstLine:          string;
    src:                string;
    secondLine:         string;
    personName:         string;
    date:               string;
    hasSecondaryText:   boolean;

    constructor(
        firstLine:      string, 
        src:            string,
        hasSecondary:   boolean,
        secondLine:     string,
        personName:     string,
        date:           string
        ){
            this.hasSecondaryText   = hasSecondary;
            this.firstLine          = firstLine;
            this.secondLine         = secondLine;
            this.src                = src;
            this.personName         = personName;
            this.date               = date;
    };
}