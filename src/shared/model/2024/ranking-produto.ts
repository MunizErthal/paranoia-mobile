import { Partida } from "./partida";

export class RankingProduto {
    produto: string;
    partidas: Partida[];
  
    constructor(produto: string,
                partidas: Partida[]) {
      this.produto = produto;
      this.partidas = partidas;
    }
  }