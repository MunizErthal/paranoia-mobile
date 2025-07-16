export class Dica {
    dica: string;
    index: number;
    selecionada: boolean | false;
    dicaFinal: boolean;
    indexPai: number[];
    imagem: string;
  
    constructor(dica: string,
                index: number,
                selecionada: boolean,
                dicaFinal: boolean,
                indexPai: number[]) {
      this.dica = dica;
      this.index = index;
      this.selecionada = selecionada;
      this.dicaFinal = dicaFinal;
      this.indexPai = indexPai;
      this.selecionada = false;
      this.imagem = '';
    }
  }