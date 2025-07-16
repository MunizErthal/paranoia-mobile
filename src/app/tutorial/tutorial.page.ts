import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage {

  videos = [ 'Iniciar Partida Escape de Mesa', 'Pedir Dicas', 'Ver Vídeo de Respostas', 'Extrair', 'Instalar Apps Android', 'Instalar Apps IOs']
  cadeados = ['Cadeado de Direções', 'Cadeado de digitos com números', 'Cadeado de Digitos', 'Cadeado de Apertar'];

  play = false;
  videoSelect = '0';

  listaCadeados = false;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) { }

  playVideo(idVideo: any) {
    if (idVideo === this.videoSelect) {
      this.videoSelect = '0';
      return;
    }

    this.videoSelect = idVideo;
  }

  changeCadeadosView() {
    this.listaCadeados = !this.listaCadeados;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  backButton() {
    this.navCtrl.navigateRoot('home');
  }
}
