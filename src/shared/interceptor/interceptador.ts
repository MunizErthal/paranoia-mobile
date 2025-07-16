import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { AlertService } from '../toast/toast.service';
import { environment } from 'src/environments/environment';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage/storage.service';

@Injectable()
export class Interceptador implements HttpInterceptor {

    constructor(private storageService: StorageService,
                private toastService: AlertService,
                private navCtrl: NavController) { }

    // Intercepts all HTTP requests!
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloned = req.clone({
            headers: req.headers
                        .set('token', `${environment.usuario ? environment.usuario.token : ''}`)
                        .set('Content-Type', 'application/json')
        });
    
        return next.handle(cloned).pipe(
            catchError((err: any) => {
                if (err.status === undefined || err.status === 400) {
                    this.toastService.showError('Erro na requisição.');
                } else if (err.status === 0 || err.status === 511) {
                    this.logout();
                } else if (err.status === 500) {
                    this.toastService.showError('Erro no processamento da requisição.');
                } else {
                    this.toastService.showError(err.error.mensagem);
                }
                return EMPTY;
            }));
    }

    logout() {
        this.toastService.showError('Sessão expirada.');
        environment.usuario = { token: '', nome: '', email: '', sobrenome: '', hash: '' };
        this.storageService.removeStorage('usuarioStorage');
        this.navCtrl.navigateRoot('login');
    }
}