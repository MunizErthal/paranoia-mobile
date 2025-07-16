import { Component } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { NativeAudio } from '@capacitor-community/native-audio'; // https://github.com/capacitor-community/native-audio
import { v4 as uuid } from 'uuid';
import { Dica } from 'src/shared/model/2024/dica';
import { PartidaService } from 'src/shared/services/requisicoes/partida';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/shared/services/storage/storage.service';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss']
})
export class DicasPage {
  partidaId = '';

  dicas: Dica[] = [];
  dicaSelecionada: Dica;
  dicaSelecionadaIndex: number;

  audioTocTocUUID = '';
  audioTocTocAtivo = false;
  audioTocToc = false;
  
  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public partidaService: PartidaService,
              public storageService: StorageService,
              public route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      if (params && params['partidaId']) {
        this.partidaId = params['partidaId'];
        this.carregarDicas();
      }

      if (this.partidaId === '') {
        this.navCtrl.back();
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  ionViewWillLeave() {
    this.removerAudios();
  }

  carregarDicas() {
    this.partidaService.obter(this.partidaId).subscribe({
      next: data => {
        this.dicas = data.dicas;
      }
    });
  }

  selecionarDica(dica: Dica, index: number) {
    this.dicaSelecionada = dica;
    this.dicaSelecionadaIndex = index;
  }

  ouvirTocToc() {
    this.audioTocTocAtivo = !this.audioTocTocAtivo;
    setTimeout(() => {
      if (!this.audioTocToc) {
        this.acaoAoPararTocToc(this.audioTocTocUUID);
      } else {
        NativeAudio.stop({ assetId: 'toctoc' });
        this.audioTocToc = false;
      }
    }, 55);
  }

  acaoAoPararTocToc(currentUuid: string) {
    this.tocarAudio('toctoc');
    this.audioTocTocUUID = uuid();
    this.audioTocToc = true;

    setTimeout(() => {
      if (this.audioTocTocUUID === currentUuid)
        this.audioTocToc = false;
      this.audioTocTocAtivo = false;
    }, 3300);
  }

  tocarAudio(assetId: string) {
    NativeAudio.preload({
      assetId: assetId,
      assetPath: "public/assets/audio/" + assetId + ".mp3",
      audioChannelNum: 1,
      isUrl: false,
    }).finally(() => {
      NativeAudio.play({assetId: assetId});
    });
  }

  removerAudios() {
    NativeAudio.unload({ assetId: "toctoc"});
  }

  backButton() {
    this.navCtrl.navigateRoot('desafio');
  }
}
