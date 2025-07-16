import {Equipe} from './2024/equipe';

export class MessageModel {
    textMessage: string;
    titleMessage: string;
    
    constructor(textMessage: string,
        titleMessage: string) {
        this.textMessage = textMessage;
        this.titleMessage = titleMessage;
    }
}
