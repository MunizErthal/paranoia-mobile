export class Convite {
    id: string;
    nomeEquipe: string;
    enviadoPor: string;

    constructor(id: string, nomeEquipe: string, enviadoPor: string) {
        this.id = id;
        this.nomeEquipe = nomeEquipe;
        this.enviadoPor = enviadoPor;
    }
}
