import { Component } from '@angular/core';
import { AlertController, LoadingController, MenuController, NavController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Medalha } from 'src/shared/model/2024/medalha';
import { Perfil } from 'src/shared/model/2024/perfil';
import { PerfilService } from 'src/shared/services/requisicoes/perfil';

@Component({
  selector: 'app-medalhas',
  templateUrl: './medalhas.page.html',
  styleUrls: ['./medalhas.page.scss']
})
export class MedalhasPage {

  medalhas: Medalha[] = [];

  constructor(public navCtrl: NavController,
    public perfilService: PerfilService,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    public toastController: ToastController) {}

  backButton() {
    this.navCtrl.navigateBack('home');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.carregarPerfil();
  }

  carregarPerfil() {
    if (!environment.usuario.token) {
        this.navCtrl.navigateRoot('login');
    } else {
      this.perfilService.obterPerfil().subscribe({
          next: data => this.buildMedalhas(data as Perfil)
      });
    }
  }

  buildMedalhas(perfil: Perfil) {
    perfil.medalhas
      .sort(function(medalhaX, medalhaY) {
        return (medalhaX.temMedalha === medalhaY.temMedalha) ? 0 : medalhaX.temMedalha ? -1 : 1;
      })
      .map(medalShow => {
        this.medalhas.push(medalShow);
      });
  }

  async openMedalModal(descricao: string, nome: string, codigo: string, temMedalha: boolean, mostrarDescricao: boolean) {
    const img = '../../assets/images/medalhas/' + codigo.split(' ').join('') + (temMedalha ? '' : '_pb') + '.png';
    const descTxt = mostrarDescricao ? descricao : '??????????';
    const alert = await this.alertController.create({
      header: nome,
      cssClass: 'modalClass',
      message: `<div class="messageMedalModal">
                    <img src="` + img + `" class="modalImgMedal"/>
                  <label class="labelTextMedal">` + descTxt + `</label>
                </div>`,
      buttons: [
        {
          text: 'Sair',
          cssClass: 'buttonModalMedal',
          role: 'cancel'
        }
      ],
    });

    await alert.present();
  }
}
