export class UserInfosDTO {
    name: string;
    mail: string;
    currentPts: number;
    currentExp: number;
    nextNvExp: number;
    nivel: number;
    percentNextNv: number;
    rankingPosition: number;
    pictureName: string;

    isCreateEquipe: boolean;
    equipeId: number;

    constructor(name: string,
        mail: string,
        currentPts: number,
        currentExp: number,
        nextNvExp: number,
        nivel: number,
        percentNextNv: number,
        rankingPosition: number,
        pictureName: string,
        isCreateEquipe: boolean,
        equipeId: number) {
            this.name = name;
            this.mail = mail;
            this.currentPts = currentPts;
            this.currentExp = currentExp;
            this.nextNvExp = nextNvExp;
            this.nivel = nivel;
            this.percentNextNv = percentNextNv;
            this.rankingPosition = rankingPosition;
            this.pictureName = pictureName;
        
            this.isCreateEquipe = isCreateEquipe;
            this.equipeId = equipeId;
    }
}
