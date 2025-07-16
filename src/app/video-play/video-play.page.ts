import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DicaService } from 'src/shared/services/requisicoes/dica';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.page.html',
  styleUrls: ['./video-play.page.scss']
})
export class VideoPlayPage {
  partidaId: string;
  videos: string[] = [];

  play = false;
  videoSelect = '0';

  constructor(public dicaService: DicaService,
              public navCtrl: NavController,
              public route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      if (params && params['partidaId']) {
        this.partidaId = params['partidaId'];
      }
    });
  }

  ionViewWillEnter() {
    // BUSCAR NOME DOS VÍDEOS DOS DESAFIOS, PERCORRER A LISTA E FAZER A TELA COM OS TÍTULOS 
    this.dicaService.video(this.partidaId).subscribe({
      next: data => this.videos = data
    });
  }

  playVideo(idVideo: any) {
    if (idVideo === this.videoSelect) {
      this.videoSelect = '0';
      return;
    }

    this.videoSelect = idVideo;
  }

  backButton() {
    this.navCtrl.navigateRoot('desafio');
  }
}
