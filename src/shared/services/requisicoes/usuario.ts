/**
 * Created by Fernando on 03/05/2018.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BaseService } from './base';
import { LocalInfoService } from '../terceiros/local-info.service';
import { Observable, switchMap } from 'rxjs';
import { UsuarioCadastro } from 'src/shared/model/2024/usuario-cadastro';
import { UsuarioLogin } from 'src/shared/model/2024/usuario-login';

@Injectable({  
	providedIn: 'root'  
})
export class UsuarioService extends BaseService {

  constructor(protected override httpClient: HttpClient,
              private localInfoService: LocalInfoService) {
      super(httpClient, 'usuario');
  }
  
  criar(usuarioCadastro: UsuarioCadastro) {
    return super.post('', usuarioCadastro);
  }

  verificarIndicadoPor(indicadoPor: string) {
    let params = new HttpParams().append('indicadoPor', indicadoPor);
    return super.get('/verificar_email', { params });
  }

  login(email: string, password: string): Observable<any> {
    return this.localInfoService.get().pipe(
        switchMap(data => {
            const usuarioLogin = new UsuarioLogin(email, password, data.ip, data.country, data.city, data.region);
            return super.put('/login', usuarioLogin);
        })
    );
  }

  logout(): Observable<any> {
    return super.put('/logout');
  }

  resetarSenha(email: string): Observable<any> {
    let params = new HttpParams().append('email', email);
    return super.put('/resetar_senha', undefined, { params });
  }
}
