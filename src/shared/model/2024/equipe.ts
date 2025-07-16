import { Usuario } from './usuario';
import { UsuarioEquipe } from './usuario-equipe';

export class Equipe {
    id: string;
    nome: string;
    usuarios: UsuarioEquipe[];
    lider: boolean;

    expandida: boolean = false;
    
    constructor(id: string,
                nome: string,
                usuarios: UsuarioEquipe[],
                lider: boolean) {
        this.id = id;
        this.nome = nome;
        this.usuarios = usuarios;
        this.lider = lider;
    }
}
