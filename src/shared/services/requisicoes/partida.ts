import {BaseService} from './base';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({  
	providedIn: 'root'  
})
export class PartidaService extends BaseService {

    constructor(protected override httpClient: HttpClient) {
        super(httpClient, 'partida');
    }

    obterEmAndamentoPorUsuario(): Observable<any> {
        return super.get('/em_andamento_por_usuario');
    }

    iniciar(nomeEquipe: string, produtoHash: string | undefined): Observable<any> {
        let params = new HttpParams()
            .append('nomeEquipe', nomeEquipe)
            .append('produtoHash', produtoHash ? produtoHash : '');
        return super.post('/iniciar', undefined, { params });
    }

    finalizar(partidaId: string, chute: string): Observable<any> {
        let params = new HttpParams()
            .append('partidaId', partidaId)
            .append('chute', chute);
        return super.put('/finalizar', undefined, { params });
    }

    finalizarAdmin(produtoHash: string | undefined) {
        let params = new HttpParams()
            .append('produtoHash', produtoHash ? produtoHash : '');
        return super.put('/finalizar_admin', undefined, { params });
    }

    verificarJogadores(nomeEquipe: string, produtoHash: string | undefined) {
        let params = new HttpParams()
            .append('nomeEquipe', nomeEquipe)
            .append('produtoHash', produtoHash ? produtoHash : '');
        return super.get('/verificarJogadores', { params });
    }

    obter(partidaId: string): Observable<any> {
        let params = new HttpParams().append('partidaId', partidaId);
        return super.get('', { params });
    }

    ranking(): Observable<any> {
        return super.get('/ranking');
    }

    rankingPorUsuario(): Observable<any> {
        return super.get('/ranking_por_usuario');
    }
}
