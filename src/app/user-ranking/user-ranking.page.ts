import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Ranking } from 'src/shared/model/2024/ranking';
import { PartidaService } from 'src/shared/services/requisicoes/partida';
import { PerfilService } from 'src/shared/services/requisicoes/perfil';

@Component({
  selector: 'app-user-ranking',
  templateUrl: './user-ranking.page.html',
  styleUrls: ['./user-ranking.page.scss']
})
export class UserRankingPage implements OnInit {

  ranking: Ranking[] = [];

  constructor(public navCtrl: NavController,
              public perfilService: PerfilService,
              public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.carregarRanking();
  }

  carregarRanking() {
    this.perfilService.obterRanking().subscribe({
      next: data => { this.ranking = data }
    });
  }
  
  backButton() {
    this.navCtrl.navigateBack('home');
  }
}
