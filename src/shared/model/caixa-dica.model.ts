export class CaixaDicaModel {
    partidaId: number;
    caixa: number;
    apertado: boolean;

    constructor(caixa: number, partidaId: number) {
        this.caixa = caixa;
        this.partidaId = partidaId;
        this.apertado = false;
    }
}
