import { DesafioModel } from './desafio.model';
import {Equipe} from './2024/equipe';

export class DicaBoxModel {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    desafio: DesafioModel;

    constructor(id: number,
    title: string,
    description: string,
    imageUrl: string,
    desafio: DesafioModel) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.desafio = desafio;
    }
}
