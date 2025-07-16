import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, MenuController, NavController, Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { GlobalEventService } from 'src/shared/event/global-event.service';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar, Style } from '@capacitor/status-bar';

import { register } from 'swiper/element/bundle';
import { PerfilService } from 'src/shared/services/requisicoes/perfil';
import { AlertService } from 'src/shared/toast/toast.service';
import { Perfil } from 'src/shared/model/2024/perfil';
import { Usuario } from 'src/shared/model/2024/usuario';
import { StorageService } from 'src/shared/services/storage/storage.service';
import { Medalha } from 'src/shared/model/2024/medalha';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  perfil: Perfil;
  usuario: Usuario;

  medalhas: Medalha[] = [];
  shouldHeight = document.body.clientHeight + 'px';

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private navCtrl: NavController,
              private menu: MenuController,
              private toastService: AlertService,
              private alertController: AlertController,
              private perfilService: PerfilService,
              private storageService: StorageService,
              private globalEventService: GlobalEventService) {
      this.initializeApp();
      this.globalEventService.getObservable().subscribe((data) => {
        if (data && data.userChange) {
          this.verificarStorageInfos();
        }
    });
  }

  initializeApp() {
    this.verificarStorageInfos();
    this.esconderStatusBar();
  }
  
  esconderStatusBar() {
    this.platform.ready().then(() => {
      StatusBar.hide();
      this.splashScreen.hide();
    });
    
    const hideStatusBar = async () => {
      await StatusBar.hide();
    };
    
    const setStatusBarStyleDark = async () => {
      await StatusBar.setStyle({ style: Style.Dark });
    };
    
    StatusBar.hide();
  }

  verificarStorageInfos() {
    var userInfosString = this.storageService.getStorage('usuarioStorage');
    if (userInfosString) {
      this.usuario = JSON.parse(userInfosString);
      environment.usuario.nome = this.usuario.nome;
      environment.usuario.hash = this.usuario.hash;
      environment.usuario.email = this.usuario.email;
      environment.usuario.token = this.usuario.token;
      environment.usuario.sobrenome = this.usuario.sobrenome;
      this.carregarPerfil();
    } else {
      this.logout();
    }
  }

  carregarPerfil() {
    if (!environment.usuario.token) {
        this.navCtrl.navigateRoot('login');
    } else {
      this.perfilService.obterPerfil().subscribe({
          next: data => { this.perfil = data; }
      });
    }
  }
  
  openMenu(menu: string) {
    this.menu.close();
    this.navCtrl.navigateForward(menu);
  }
  
  goHome() {
    this.menu.close();
    this.navCtrl.navigateRoot('home');
  }

  logout() {
    this.storageService.removeStorage('usuarioStorage');
    environment.usuario = { token: '', nome: '', email: '', sobrenome: '', hash: '' };
    this.navCtrl.navigateRoot('login');
  }

  finalizarPartidaAdmin() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        commandType: 1
      }
    };

    this.menu.close();
    this.navCtrl.navigateForward('leitor-qr', navigationExtras);
  }

  async openAdminMedalSet() {
    const alert = await this.alertController.create({
      header: "Medalhas",
      cssClass: 'modalClass',
      message: `<div class="messageMedalModal">
                  <label class="labelTextMedal">Conceder Medalha.</label>
                </div>`,
      buttons: [
        {
          text: 'Setar medalha',
          cssClass: 'buttonModalMedal',
          handler: data => {
            this.setMedal(data.mail, data.medalId);
          }
        }
      ],
      inputs: [
        {
          name: 'mail',
          type: 'text',
          placeholder: 'Email do usuário'
        },
        {
          name: 'medalId',
          type: 'number',
          min: 1,
          placeholder: 'Id da medalha'
        }
      ]
    });

    await alert.present();
  }

  setMedal(userMail: any, medalId: any) {
    if (!environment.usuario.token) {
        this.toastService.showError('Sessão expirada.');
        this.navCtrl.navigateRoot('login');
    } else {
      this.perfilService.concederMedalhas(userMail, medalId)
      .subscribe({
        next: data => this.toastService.showSuccess('Medalha setada com sucesso.')
      });
    }
  }
}
