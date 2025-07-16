export class UsuarioCadastro {
    cpf: string;
    hash: string;
    nome: string;
    email: string;
    token: string;
    senha: string;
    telefone: string;
    criadoEm: string;
    sobrenome: string;
    indicadoPor: string;
  
    constructor(
      cpf?: string,
      hash?: string,
      nome?: string,
      email?: string,
      token?: string,
      senha?: string,
      telefone?: string,
      criadoEm?: string,
      sobrenome?: string,
      indicadoPor?: string
    ) {
      this.cpf = cpf || '';
      this.hash = hash || '';
      this.nome = nome || '';
      this.email = email || '';
      this.token = token || '';
      this.senha = senha || '';
      this.telefone = telefone || '';
      this.criadoEm = criadoEm || '';
      this.sobrenome = sobrenome || '';
      this.indicadoPor = indicadoPor || '';
    }
  }
  