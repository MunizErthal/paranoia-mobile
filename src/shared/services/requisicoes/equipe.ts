import {BaseService} from './base';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Equipe } from 'src/shared/model/2024/equipe';

@Injectable({
	providedIn: 'root'  
})
export class EquipeService extends BaseService {

    constructor(protected override httpClient: HttpClient) {
        super(httpClient, 'equipe');
    }

    criar(nome: string): Observable<any> {
        let params = new HttpParams().append('nome', nome);
        return super.post('', undefined, { params });
    }
    
    editar(equipe: Equipe): Observable<any> {
        let params = new HttpParams()
            .append('equipeId', equipe.id)
            .append('nome', equipe.nome);
        return super.put('', undefined, { params });
    }

    deletar(equipeId: string): Observable<any> {
        let params = new HttpParams().append('equipeId', equipeId);
        return super.delete('', { params });
    }

    obterEquipes(): Observable<any> {
        return super.get('');
    }

    obterConvites(): Observable<any> {
        return super.get('/convites');
    }

    enviarConvite(equipeId: string, email: string): Observable<any> {
        let params = new HttpParams()
            .append('equipeId', equipeId)
            .append('email', email);
        return super.post('/enviar_convite', undefined, { params });
    }

    responderConvite(conviteId: string, resposta: boolean) {
        let params = new HttpParams()
            .append('conviteId', conviteId)
            .append('resposta', resposta);
        return super.put('/responder_convite', undefined, { params });
    }

    removerMembro(equipeId: string, usuarioHash: string) {
        let params = new HttpParams()
            .append('equipeId', equipeId)
            .append('usuarioHash', usuarioHash);
        return super.put('/remover_membro', undefined, { params });
    }

    sairDaEquipe(equipeId: string) {
        let params = new HttpParams()
            .append('equipeId', equipeId);
        return super.put('/sair', undefined, { params });
    }
}