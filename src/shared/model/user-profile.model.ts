import {MedalModel} from './medal.model';

export class UserProfileModel {
  name: string;
  currentPts: number;
  currentExp: number;
  nextNvExp: number;
  nivel: number;
  percentNextNv: number;
  rankingPosition: number;
  pictureName: string;
  medals: MedalModel[];
    
  constructor(name: string,
    currentPts: number,
    currentExp: number,
    nextNvExp: number,
    nivel: number,
    percentNextNv: number,
    rankingPosition: number,
    pictureName: string,
    medals: MedalModel[]) {
      this.name = name;
      this.currentPts = currentPts;
      this.currentExp = currentExp;
      this.nextNvExp = nextNvExp;
      this.nivel = nivel;
      this.percentNextNv = percentNextNv;
      this.rankingPosition = rankingPosition;
      this.pictureName = pictureName;
      this.medals = medals;
  }
}
