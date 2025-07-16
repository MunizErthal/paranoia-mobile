import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
//import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

//https://github.com/capacitor-community/barcode-scanner#installation
//import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerOptions, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner'
import { PartidaService } from 'src/shared/services/requisicoes/partida';
import { EquipeService } from 'src/shared/services/requisicoes/equipe';
import { Equipe } from 'src/shared/model/2024/equipe';
import { AlertService } from 'src/shared/toast/toast.service';

@Component({
  selector: 'app-leitor-qr',
  templateUrl: './leitor-qr.page.html',
  styleUrls: ['./leitor-qr.page.scss']
})
export class LeitorQrPage {

  equipes: Equipe[];
  nomeEquipeSelecionada: string;

  commandType: number = 0;

  constructor(public navCtrl: NavController, 
              public partidaService: PartidaService, 
              public equipeProvider: EquipeService, 
              public menuCtrl: MenuController, 
              public alertService: AlertService,
              public route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      if (params && params['commandType']) {
        this.commandType = JSON.parse(params['commandType']);
      }
    });
  }

  ionViewWillEnter() {
    this.carregarEquipes();
    this.menuCtrl.enable(true);
  }

  carregarEquipes() {
    this.nomeEquipeSelecionada = '';
    this.equipeProvider.obterEquipes().subscribe({
      next: data => {
        this.equipes = data;
        this.equipes.push(new Equipe('SEM_EQUIPE', 'Jogar Sem Equipe', [], true));
      }
    });
  }

  async lerQRCode() {
    if (this.commandType !== 1 && this.nomeEquipeSelecionada === '') {
      this.alertService.showError("Selecione uma equipe para continuar");
      return;
    }

    let options: CapacitorBarcodeScannerOptions = { hint: CapacitorBarcodeScannerTypeHint.QR_CODE };
    CapacitorBarcodeScanner.scanBarcode(options).then(data => {
      if (data.ScanResult) {
        if (this.commandType === 0) {
          this.verificarQRCode(data.ScanResult);
        } else if (this.commandType === 1) {
          this.finalizarAdmin(data.ScanResult);
        }
        document.body.classList.remove('scanner-active');
      }
    });
  }

  finalizarAdmin(hash: string) {
    this.partidaService.finalizarAdmin(hash).subscribe({
      next: () => { 
        this.alertService.showSuccess("Partida finalizada com sucesso");
        this.navCtrl.navigateRoot('home');
      }
    });
  }

  async verificarQRCode(qrText: string | undefined) {
    // No momento em que ler o QR-Code, pedir confirmação do contrato, e se recusar, enviar para a home.
    const contratoConfirm = await this.contrato();
    if (!contratoConfirm) {
      this.navCtrl.navigateRoot('home');
      return;
    }

    await this.partidaService.verificarJogadores(this.nomeEquipeSelecionada, qrText).subscribe(
      async (data: any) => {
        if (data) {
          const verificarJogadoresConfirm = await this.jogadorJaJogou();
          if (!verificarJogadoresConfirm) {
            this.navCtrl.navigateRoot('home');
            return;
          }
        }

        this.partidaService.iniciar(this.nomeEquipeSelecionada, qrText).subscribe({
          next: data => {
            let navigationExtras: NavigationExtras = {
              queryParams: {
                partidaId: JSON.stringify(data.id)
              }
            };
            this.navCtrl.navigateForward(data.produtoCodigo, navigationExtras);
        }});
      });
  }

  cancelar() {
    this.navCtrl.navigateRoot('home');
    document.body.classList.remove('scanner-active');
  }

  async jogadorJaJogou() {
    return new Promise(async (resolve) => {
      let mensagem = `<div class="messageMedalModal">
                        <label class="labelTextMedal">Um ou mais jogadores do seu time já jogou o desafio, o tempo conquistado neste jogo não fará parte do ranking.</label>
                        <label class="labelTextMedal">Deseja continuar mesmo assim?</label>
                      </div>`;
      await resolve(this.alertService.showConfirm('ATENÇÃO!', mensagem));
    });
  }

  async contrato() {
    return new Promise(async (resolve) => {
      let mensagem = `<div class="messageMedalModal">
                        <label class="labelTextMedal">Você está ciente de que, ao clicar em <a class="labelTextMedalRED" style="color: red !important;">SIM</a>, estará assumindo a leitura do contrato enviado junto da EscapeBox, e aceitando estar de acordo com todas as cláusulas do mesmo?</label>
                      </div>`;
      await resolve(this.alertService.showConfirm('ATENÇÃO!', mensagem));
    });
  }
}
