import {Equipe} from './2024/equipe';
import {DesafioModel} from './desafio.model';

export class DesafioInfoModel {
    id: number;
    equipe: Equipe;
    desafio: DesafioModel;
    dateInicio: Date;
    dateFinal: Date;
    numeroDeDicas: number;
    tempoDeJogoText: string;
    tempoDeJogo: number;
    resolvido: boolean;
    finalizado: boolean;
    firstTime: boolean;
    playVideo: boolean;

    constructor(id: number,
        equipe: Equipe,
        desafio: DesafioModel,
        dateInicio: Date,
        dateFinal: Date,
        numeroDeDicas: number,
        tempoDeJogoText: string,
        tempoDeJogo: number,
        resolvido: boolean,
        finalizado: boolean,
        firstTime: boolean,
        playVideo: boolean) {
            this.id = id;
            this.equipe = equipe;
            this.desafio = desafio;
            this.dateInicio = dateInicio;
            this.dateFinal = dateFinal;
            this.numeroDeDicas = numeroDeDicas;
            this.tempoDeJogoText = tempoDeJogoText;
            this.tempoDeJogo = tempoDeJogo;
            this.resolvido = resolvido;
            this.finalizado = finalizado;
            this.firstTime = firstTime;
            this.playVideo = playVideo;
    }
}
