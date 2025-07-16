import {Equipe} from './2024/equipe';

export class DesafioModel {
    id: number;
    name: string;
    respostaFinal: string;
    type: string;

    constructor(id: number,
        name: string,
        respostaFinal: string,
        type: string) {
            this.id = id;
            this.name = name;
            this.respostaFinal = respostaFinal;
            this.type = type;
    }
}
