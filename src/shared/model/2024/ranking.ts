export class Ranking {
  nome: string;
  sobrenome: string;
  foto: string;
  experiencia: number;
  nivel: number;

  constructor(
    nome: string,
    sobrenome: string,
    foto: string,
    experiencia: number,
    nivel: number
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.foto = foto;
    this.experiencia = experiencia;
    this.nivel = nivel;
  }
}
