export class UsuarioLogin {
    email: string;
    senha: string;
    ip: string;
    pais: string;
    cidade: string;
    estado: string;
  
    constructor(email?: string,
                senha?: string,
                ip?: string,
                pais?: string,
                cidade?: string,
                estado?: string) {
      this.email = email || '';
      this.senha = senha || '';
      this.ip = ip || '';
      this.pais = pais || '';
      this.cidade = cidade || '';
      this.estado = estado || '';
    }
  }
  