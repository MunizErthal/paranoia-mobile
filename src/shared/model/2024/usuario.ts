import { Partida } from "./partida";
import { Perfil } from "./perfil";

export class Usuario {
  cpf: string;
  hash: string;
  nome: string;
  email: string;
  token: string;
  perfil: Perfil;
  telefone: string;
  criadoEm: string;
  sobrenome: string;
  emailConfirmado: boolean;
  partidasEmAndamento: Partida[];

  constructor(
    perfil: Perfil,
    cpf?: string,
    hash?: string,
    nome?: string,
    email?: string,
    token?: string,
    telefone?: string,
    criadoEm?: string,
    sobrenome?: string,
    emailConfirmado?: boolean,
    partidasEmAndamento?: Partida[]
  ) {
    this.perfil = perfil;
    this.cpf = cpf || '';
    this.hash = hash || '';
    this.nome = nome || '';
    this.email = email || '';
    this.token = token || '';
    this.telefone = telefone || '';
    this.criadoEm = criadoEm || '';
    this.sobrenome = sobrenome || '';
    this.emailConfirmado = emailConfirmado || false;
    this.partidasEmAndamento = partidasEmAndamento || [];
  }
}
