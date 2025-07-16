export class QuestoesDicaModel {
    questaoNumber: number;
    questaoDescription: string;
    apertado: boolean = false;
    
    constructor(questaoNumber: number,
        questaoDescription: string,
        apertado: boolean = false) {
        this.questaoNumber = questaoNumber;
        this.questaoDescription = questaoDescription;
        this.apertado = apertado;
    }
}
