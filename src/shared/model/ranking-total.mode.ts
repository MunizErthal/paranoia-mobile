import { RankingModel } from './ranking.model';

export class RankingTotalModel {
    name: string;
    ranking: RankingModel[];

    constructor(name: string, ranking: RankingModel[]) {
        this.name = name;
        this.ranking = ranking;
    }
}