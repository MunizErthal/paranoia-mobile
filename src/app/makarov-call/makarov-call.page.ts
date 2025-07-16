import { Component } from '@angular/core';
import { DesafioInfoModel } from 'src/shared/model/desafio-info.model';
import { NavController } from '@ionic/angular';

import { NativeAudio } from '@capacitor-community/native-audio'; // https://github.com/capacitor-community/native-audio
import { Haptics } from '@capacitor/haptics';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AlertService } from 'src/shared/toast/toast.service';

@Component({
  selector: 'app-makarov-call',
  templateUrl: './makarov-call.page.html',
  styleUrls: ['./makarov-call.page.scss']
})
export class MakarovCallPage {
  partidaId = '';

  call = false;
  desafioInfo: DesafioInfoModel;
  atendeu = false;

  contadorSeg = 0;
  segundoFit = '0';
  timestring = '00:00';

  userName = '';
  finalizando = false;

  constructor(public navCtrl: NavController,
              public route: ActivatedRoute,
              public alertService: AlertService) {
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      if (params && params['partidaId']) {
        this.partidaId = JSON.parse(params['partidaId']);
      } else if (params && params['finalizando']) {
        this.finalizando = true;
      }
    });
  }

  ionViewWillEnter() {
    this.userName = environment.usuario.nome;
    this.simularChamada();
  }

  ionViewWillLeave() {
    this.removerAudios();
  }

  simularChamada() {
    this.tocarAudio('toqueCelular', true);
    this.simularVibracao();
  }

  simularVibracao() {
    if (this.atendeu) {
      return;
    }

    Haptics.vibrate({ duration:900 });
    setTimeout(() => {
      Haptics.vibrate({duration:1});
      setTimeout(() => {
        this.simularVibracao();
      }, 800);
    }, 910);
  }

  atende() {
    this.atendeu = true;
    this.pararToqueEVibracao();

    if (this.finalizando) {
      this.executarAudioVencedor();
    } else {
      this.executarAudioInicioJogo();
    }
  }

  executarAudioInicioJogo() {
    this.tocarAudio('audioMakarov', false);
    this.simularLigacao();
    setTimeout(() => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          partidaId: JSON.stringify(this.partidaId)
        }
      };
      this.navCtrl.navigateForward('desafio', navigationExtras);
    }, 60000);
  }

  pararToqueEVibracao() {
    Haptics.vibrate({duration:1});
    NativeAudio.stop({assetId: 'toqueCelular'});
  }

  simularLigacao() {
      setTimeout(() => {
          let first = '00:';
          if (this.contadorSeg === 59) {
              first = '01:';
              this.segundoFit = '0';
              this.contadorSeg = 0;
          }

          if (this.contadorSeg === 9) {
              this.segundoFit = '';
          }

          this.contadorSeg = this.contadorSeg + 1;
          this.timestring = first + this.segundoFit + this.contadorSeg;

          if (this.contadorSeg <= 60) {
              this.simularLigacao();
          }
      }, 1000);
  }

  tocarAudio(assetId: string, loop: boolean) {
    NativeAudio.preload({
      assetId: assetId,
      assetPath: "public/assets/audio/" + assetId + ".mp3",
      audioChannelNum: 1,
      isUrl: false,
    }).finally(() => {
      NativeAudio.play({assetId: assetId});
      if (loop) {
        NativeAudio.loop({assetId: assetId});
      }
    });
  }

  executarAudioVencedor() {
    this.tocarAudio('audioVencedor', false);
    
    this.simularLigacao();
    setTimeout(() => {      
      this.alertService.showSuccess('Parabéns! Missão finalizado!');
      this.navCtrl.navigateRoot('home');
    }, 21000);
  }

  removerAudios() {
    NativeAudio.unload({ assetId: "toqueCelular"});
    NativeAudio.unload({ assetId: "audioMakarov"});
    NativeAudio.unload({ assetId: "audioVencedor"});
  }
}
