import {Medalha} from './medalha';
import { Nivel } from './nivel';

export class Perfil {
  experiencia: number;
  bitnoias: number;
  foto: string | 'profileDefault';
  porcentagemProximoNivel: number;
  posicaoRanking: number;
  nivel: Nivel;
  medalhas: Medalha[];

  constructor(nivel: Nivel,
              experiencia?: number,
              bitnoias?: number,
              foto?: string,
              porcentagemProximoNivel?: number,
              posicaoRanking?: number,
              medals?: Medalha[]) {
    this.experiencia = experiencia || 0;
    this.bitnoias = bitnoias || 0;
    this.foto = foto || 'profileDefault';
    this.porcentagemProximoNivel = porcentagemProximoNivel || 0;
    this.posicaoRanking = posicaoRanking || 0;
    this.nivel = nivel;
    this.medalhas = medals || [];
  }
}
