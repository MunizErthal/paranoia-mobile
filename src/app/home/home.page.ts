import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Partida } from 'src/shared/model/2024/partida';
import { PartidaService } from 'src/shared/services/requisicoes/partida';
import { StorageService } from 'src/shared/services/storage/storage.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  partidasEmAndamento: Partida[] = [];

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public storageService: StorageService,
              public partidaService: PartidaService) { }

  ionViewWillEnter() {
    this.partidaService.obterEmAndamentoPorUsuario().subscribe({
      next: data => { this.partidasEmAndamento = data }
    });
    this.menuCtrl.enable(true);
  }

  carregarPartida(partidaId: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        partidaId: JSON.stringify(partidaId)
      }
    };
    this.navCtrl.navigateRoot('desafio', navigationExtras);
  }

  goTutorial() {
    this.navCtrl.navigateForward('tutorial');
  }

  lerQRCode() {
    this.navCtrl.navigateForward('leitor-qr');
  }

  formatarData(data: string) {
    return moment(data).format('DD/MM/YYYY HH:mm:ss');
  }
}
