import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RankingProduto } from 'src/shared/model/2024/ranking-produto';
import { PartidaService } from 'src/shared/services/requisicoes/partida';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss']
})
export class RankingPage {

  rankingProduto: RankingProduto[] = [];
  slideOpts = {
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  };

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public partidaService: PartidaService) {}
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.carregarRanking();
  }

  carregarRanking() {
    this.partidaService.ranking().subscribe({
      next: data => { this.rankingProduto = data }
    });
  }

  backButton() {
    this.navCtrl.navigateBack('home');
  }

}
