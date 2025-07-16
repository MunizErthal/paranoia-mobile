export class UsuarioEquipe {
  nome: string;
  hash: string;
  foto: string;
  lider: boolean;

  constructor(
    nome?: string,
    hash?: string,
    foto?: string,
    lider?: boolean
  ) {
    this.nome = nome || '';
    this.hash = hash || '';
    this.foto = foto || '';
    this.lider = lider || false;
  }
}
