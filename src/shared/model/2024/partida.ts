import { Dica } from "./dica";
import { Usuario } from "./usuario";

export class Partida {
    id: string;
    tempoDeJogo: string;
    produtoCodigo: string;
    produto: string;
    resolvido: boolean;
    usouVideo: boolean;
    nomeEquipe: string;
    numeroDeDicas: number;
    posicaoRanking: number;
    dicas: Dica[];
    numeroDeJogadores: number;
    criadoEm: Date;
    primeiraPartida: boolean;
    finalizadoEm: Date;
    usuarios: Usuario[];
  
    constructor(id: string,
                tempoDeJogo: string,
                produtoCodigo: string,
                produto: string,
                resolvido: boolean,
                usouVideo: boolean,
                nomeEquipe: string,
                numeroDeDicas: number,
                posicaoRanking: number,
                dicas: Dica[],
                numeroDeJogadores: number,
                criadoEm: Date,
                primeiraPartida: boolean,
                finalizadoEm: Date,
                usuarios: Usuario[]) {
      this.id = id;
      this.tempoDeJogo = tempoDeJogo;
      this.produtoCodigo = produtoCodigo;
      this.produto = produto;
      this.resolvido = resolvido;
      this.usouVideo = usouVideo;
      this.posicaoRanking = posicaoRanking;
      this.nomeEquipe = nomeEquipe;
      this.numeroDeDicas = numeroDeDicas;
      this.dicas = dicas;
      this.numeroDeJogadores = numeroDeJogadores;
      this.criadoEm = criadoEm;
      this.primeiraPartida = primeiraPartida;
      this.finalizadoEm = finalizadoEm;
      this.usuarios = usuarios;
    }
  }