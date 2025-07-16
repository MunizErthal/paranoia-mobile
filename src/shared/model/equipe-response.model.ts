import {Equipe} from './2024/equipe';
import {Convite} from './2024/convite';

export class EquipeResponseModel {
    equipeInfo: Equipe;
    userConvite: Convite[];

    constructor(equipeInfo: Equipe,
    userConvite: Convite[]) {
        this.equipeInfo = equipeInfo;
        this.userConvite = userConvite;
    }
}
