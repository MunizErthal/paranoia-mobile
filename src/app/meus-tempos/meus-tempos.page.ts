import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Partida } from 'src/shared/model/2024/partida';
import { PartidaService } from 'src/shared/services/requisicoes/partida';

@Component({
  selector: 'app-meus-tempos',
  templateUrl: './meus-tempos.page.html',
  styleUrls: ['./meus-tempos.page.scss']
})
export class MeusTemposPage {

  ranking: Partida[] = [];

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public partidaService: PartidaService) {}
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.carregarTempos();
  }

  carregarTempos() {
    this.partidaService.rankingPorUsuario().subscribe({
      next: data => { this.ranking = data }
    });
  }

  backButton() {
    this.navCtrl.navigateBack('home');
  }

}
