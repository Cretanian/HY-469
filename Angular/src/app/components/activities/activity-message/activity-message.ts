export class Message{
    firstLine:     string;
    src:                string;
    hasSecondary:       boolean;
    secondLine:   string;
    personName:      string;

    constructor(
        firstLine: string, 
        src: string,
        hasSecondary:       boolean,
        secondLine:   string,
        personName:      string
        ){
            this.hasSecondary = hasSecondary;
            this.firstLine = firstLine;
            this.secondLine = secondLine;
            this.src = src;
            this.personName = personName;
    };
}