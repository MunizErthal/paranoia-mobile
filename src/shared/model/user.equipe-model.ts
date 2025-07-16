export class UserEquipeDTO {
    userId: number;
    name: string;
    pictureName: string;
    isCreateEquipe: boolean;
    
    constructor(userId: number,
        name: string,
        pictureName: string,
        isCreateEquipe: boolean) {
            this.userId = userId;
            this.name = name;
            this.pictureName = pictureName;
            this.isCreateEquipe = isCreateEquipe;
    }
}
