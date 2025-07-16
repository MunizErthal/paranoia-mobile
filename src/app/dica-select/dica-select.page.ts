import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { DicaService } from 'src/shared/services/requisicoes/dica';
import { AlertService } from 'src/shared/toast/toast.service';
import { Dica } from 'src/shared/model/2024/dica';

@Component({
  selector: 'app-dica-select',
  templateUrl: './dica-select.page.html',
  styleUrls: ['./dica-select.page.scss']
})
export class DicaSelectPage {
  partidaId: string;
  produtoCodigo: string;
  usouVideo: boolean = false;
  
  dicas: Dica[] = [];
  etapa = 0;

  constructor(private route: ActivatedRoute,
              public navCtrl: NavController,
              public dicaService: DicaService,
              public alertService: AlertService) {
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      if (params && params['partidaId']) {
        this.partidaId = params['partidaId'];
        this.produtoCodigo = params['produtoCodigo'];
        this.usouVideo = params['usouVideo'] === 'true';
      }
    });
  }

  ionViewWillEnter() {
    this.etapa = 0;
    this.dicas = [];
    this.solicitarDicas();
  }

  solicitarDicas(dica?: Dica) {
    this.animarBotao(dica);
    this.dicaService.solicitar(this.partidaId, this.dicas).subscribe({
      next: data => {
          this.dicas = data as Dica[];
          let dicaFinal = this.dicas.filter(dicaFiltrada => dicaFiltrada.dicaFinal);
          if (dicaFinal.length > 0) {
            this.etapa = 0;
            this.backButton();
            this.showDica(dicaFinal[0]);
          } else {
            this.etapa = this.etapa + 1;
          }
      }});
  }

  marcarDica(dica: Dica) {
    dica.selecionada = !dica.selecionada;
  }

  animarBotao(dica?: Dica) {
    if (!dica)
      return;

    dica.selecionada = !dica.selecionada;
    setTimeout(() => {
      dica.selecionada = !dica.selecionada;
    }, 50);
  }

  async videoResposta() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        partidaId: this.partidaId
      }
    };

    if (this.usouVideo) {
      this.navCtrl.navigateForward('video-play', navigationExtras);
    } else {
      const confirm = await this.videoRespostaConfirmacao();
      if (confirm) {
        this.dicaService.video(this.partidaId).subscribe(() => {
            this.navCtrl.navigateForward('video-play', navigationExtras);
        });
      }
    }
  }

  async videoRespostaConfirmacao() {
    return new Promise(async (resolve) => {
      let mensagem = `<div class="messageMedalModal">
                        <label class="labelTextMedal">Lembre-se ao clicar em continuar, você abre mão de entrar no ranking de tempos dos agentes de campo para este desafio.</label>
                        <label class="labelTextMedal labelTextSecondLine">Tem certeza que deseja continuar?</label>
                      </div>`;
      await resolve(this.alertService.showConfirm('ATENÇÃO!', mensagem));
    });
  }

  async showDica(dica: Dica) {
    return new Promise(async (resolve) => {
      var audioDica = '';
      if (dica.index === 18) {
        audioDica = `<label class="playSoundLabelImage">
                      Essa dica possuí um audio. Para ouvir, vá até a lista de dicas.
                    </label>`
      }

      let mensagem = `<div class="messageMedalModal">
                        <label class="labelTextMedal">` + dica.dica + `</label>
                        ` + audioDica + `
                      </div>`;
      await resolve(this.alertService.showDialog('', mensagem));
    });
  }

  backButton() {
    this.navCtrl.navigateRoot('desafio');
  }
}
