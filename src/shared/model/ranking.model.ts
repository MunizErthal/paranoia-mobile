import { UserEquipeDTO } from './user.equipe-model';

export class RankingModel {
    position: number;
    desafioName: string;
    tempo: string;
    dicas: number;
    equipe_id: number;
    equipeName: string;
    users: UserEquipeDTO[];
    
    constructor(position: number,
        desafioName: string,
        tempo: string,
        dicas: number,
        equipe_id: number,
        equipeName: string,
        users: UserEquipeDTO[]) {
            this.position = position;
            this.desafioName = desafioName;
            this.tempo = tempo;
            this.dicas = dicas;
            this.equipe_id = equipe_id;
            this.equipeName = equipeName;
            this.users = users;
    }
}
