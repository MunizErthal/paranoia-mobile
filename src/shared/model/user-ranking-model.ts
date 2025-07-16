import { RankingModel } from './ranking.model';

export class UserRankingModel {
    name: string;
    lastName: string;
    picture_name: string;
    current_exp: number;
    nivel_id: number;
    
    constructor(name: string,
        lastName: string,
        picture_name: string,
        current_exp: number,
        nivel_id: number) {
            this.name = name;
            this.lastName = lastName;
            this.picture_name = picture_name;
            this.current_exp = current_exp;
            this.nivel_id = nivel_id;
    }
}