export class Medalha {
  nome: string;
  codigo: string;
  descricao: string;
  mostrarDescricao: boolean;
  temMedalha: boolean;

  constructor(nome: string,
              codigo: string,
              descricao: string,
              mostrarDescricao: boolean,
              temMedalha: boolean) {
    this.nome = nome;
    this.codigo = codigo;
    this.descricao = descricao;
    this.mostrarDescricao = mostrarDescricao;
    this.temMedalha = temMedalha;
  }
}