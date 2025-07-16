import * as moment from 'moment';
import { v4 as uuid } from 'uuid';
import { Component } from '@angular/core';
import { Partida } from 'src/shared/model/2024/partida';
import { StatusBar, Style } from '@capacitor/status-bar';
import { AlertService } from 'src/shared/toast/toast.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { NativeAudio } from '@capacitor-community/native-audio';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { PartidaService } from 'src/shared/services/requisicoes/partida';
import { StorageService } from 'src/shared/services/storage/storage.service';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.page.html',
  styleUrls: ['./desafio.page.scss']
})
export class DesafioPage {
  partidaId = '';
  partida: Partida;

  chute = '';
  contador = '--:--:--';

  audioMakarov = false;
  audioMakarovBotao = false;
  dicaBotao = false;
  dicaListaBotao = false;

  uuidAudioExecution = '';

  constructor(public platform: Platform,
              public navCtrl: NavController,
              public menuCtrl: MenuController,
              public alertService: AlertService,
              public splashScreen: SplashScreen,
              public partidaService: PartidaService,
              public storageService: StorageService,
              public route: ActivatedRoute) {
    this.esconderStatusBar();
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      if (params && params['partidaId']) {
        this.partidaId = JSON.parse(params['partidaId']);
      } else {
        this.partidaId = this.storageService.getStorage("partidaId");
      }

      if (this.partidaId === '') {
        this.navCtrl.navigateRoot('home');
      }
    });
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

  ionViewWillLeave() {
    this.removerAudios();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.carregarPartida();
  }

  carregarPartida() {
    this.partidaService.obter(this.partidaId).subscribe({
      next: data => {
        this.partida = data as Partida;
        this.storageService.saveStorage("partidaId", data.id);
        this.iniciarCronometro();
      }
    });
  }

  solicitarDica() {
    this.dicaBotao = true;
    setTimeout(() => {
      this.dicaBotao = false;
    }, 50);

    setTimeout(() => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          partidaId: this.partida.id,
          usouVideo: this.partida.usouVideo,
          produtoCodigo: this.partida.produtoCodigo
        }
      };

      this.navCtrl.navigateForward('dica-select', navigationExtras);
  }, 50);
  }

  dicaList() {
    this.dicaListaBotao = true;
    setTimeout(() => {
      this.dicaListaBotao = false;
    }, 50);

    setTimeout(() => {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          partidaId: this.partida.id
        }
      };
      this.navCtrl.navigateForward('dicas', navigationExtras);
    }, 150);
  }

  ouvirAudioMakarov() {
    this.audioMakarovBotao = true;
    setTimeout(() => {
      this.audioMakarovBotao = false;
    }, 50);

    setTimeout(() => {
      if (!this.audioMakarov) {
        this.executarAudioMakarov(this.uuidAudioExecution);
        this.audioMakarov = true;
      } else {
        NativeAudio.stop({ assetId: 'audioMakarov' });
        this.audioMakarov = false;
      }
    }, 150);
  }

  executarAudioMakarov(currentUuid: string) {
    this.tocarAudio('audioMakarov');
    this.uuidAudioExecution = uuid();
    setTimeout(() => {
      if (this.uuidAudioExecution === currentUuid)
        this.audioMakarov = false;
    }, 59100);
  }

  finalizar() {
    if (this.chute.length > 0) {
      this.partidaService.finalizar(this.partida.id, this.chute).subscribe({
        next: data => {
          this.chute = '';
          if (data.resolvido) {
            this.storageService.removeStorage("partidaId");
            let navigationExtras: NavigationExtras = {
              queryParams: {
                finalizando: true
              }
            };
            this.navCtrl.navigateForward(this.partida.produtoCodigo, navigationExtras);
          } else {
            this.alertService.showError('Resposta incorreta.');
          }
        }
      });
    }
  }

  removerAudios() {
    NativeAudio.unload({ assetId: "audioMakarov"});
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

  iniciarCronometro() {
    setTimeout(() => {
      const init = moment(this.partida.criadoEm, 'YYYY/MM/DD HH:mm:ss');
      const end =  moment(moment().format(), 'YYYY/MM/DD HH:mm:ss');
      const duration = moment.duration(end.diff(init));

      const hour = (duration.hours().toString().length <= 1 ? '0' + duration.hours() : duration.hours())
      const minute = (duration.minutes().toString().length <= 1 ? '0' + duration.minutes() : duration.minutes())
      const second = (duration.seconds().toString().length <= 1 ? '0' + duration.seconds() : duration.seconds())
      this.contador = hour + ':' + minute + ':' + second;
      this.iniciarCronometro();
    }, 1000);
  }

  formatarData(data: string) {
    return moment(data).format('DD/MM/YYYY HH:mm:ss');
  }

  backButton() {
    this.navCtrl.navigateRoot('home');
  }
}
