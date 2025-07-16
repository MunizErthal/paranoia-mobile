export class Nivel {
    nivel: number;
    expProximoNivel: number;
    bitNoias: number;
    proximoNivel: number;
  
    constructor(nivel: number,
                expProximoNivel: number,
                bitNoias: number,
                proximoNivel: number) {
      this.nivel = nivel;
      this.expProximoNivel = expProximoNivel;
      this.bitNoias = bitNoias;
      this.proximoNivel = proximoNivel;
    }
  }