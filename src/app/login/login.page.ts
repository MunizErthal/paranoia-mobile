import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { GlobalEventService } from 'src/shared/event/global-event.service';
import { Usuario } from 'src/shared/model/2024/usuario';
import { UsuarioService } from 'src/shared/services/requisicoes/usuario';
import { StorageService } from 'src/shared/services/storage/storage.service';
import { AlertService } from 'src/shared/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email = '';
  password = '';

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public toastService: AlertService,
              public storageService: StorageService,
              public usuarioService: UsuarioService,
              public globalEventService: GlobalEventService) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  cadastrar() {
    this.navCtrl.navigateForward('cadastro');
  }

  login() {
    this.usuarioService.login(this.email, this.password).subscribe({
      next: data => this.loginSuccess(data)
    });
  }

  loginSuccess(usuario: Usuario) {
    this.menuCtrl.enable(true);
    this.navCtrl.navigateRoot('home');
    this.storageusuarioInfos(usuario);
    this.toastService.showSuccess('Bem vindo(a) ' + usuario.nome);
  }

  storageusuarioInfos(usuario: Usuario) {
    environment.usuario.nome = usuario.nome;
    environment.usuario.hash = usuario.hash;
    environment.usuario.email = usuario.email;
    environment.usuario.token = usuario.token;
    environment.usuario.sobrenome = usuario.nome;
    this.storageService.saveStorage('usuarioStorage', JSON.stringify(environment.usuario));
    this.globalEventService.publishSomeData({ userChange: true });
  }
}
