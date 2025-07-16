import {BaseService} from './base';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({  
	providedIn: 'root'  
})
export class PerfilService extends BaseService {

    constructor(protected override httpClient: HttpClient) {
        super(httpClient, 'perfil');
    }

    obterPerfil(): Observable<any> {
        return super.get('');
    }

    obterRanking(): Observable<any> {
        let params = new HttpParams().append('size', 10);
        return super.get('/ranking', { params });
    }

    imageSave(imagem: string, token: string): Observable<any> {
        const body = new FormData().append('file', imagem);
        return super.post('/foto', body);
    }

    concederMedalhas(emailUsuario: string, medalhas: string[]): Observable<any> {
        let params = new HttpParams()
            .append('emailUsuario', emailUsuario)
            .append('medalhas', medalhas.toString());
        return super.put('/conceder-medalha', { params });
    }
}