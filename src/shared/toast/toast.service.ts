import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";

@Injectable({  
	providedIn: 'root'  
})  
export class AlertService {
  constructor(public toastController: ToastController,
              public alertController: AlertController) { }

  async showError(mensagem: string) {
      const toast = await this.toastController.create({
        message: mensagem,
        duration: 5000,
        position: 'bottom',
        color: 'danger'
      });
  
      toast.present();
  }

  async showSuccess(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 5000,
      position: 'bottom',
      color: 'success'
    });

    toast.present();
  }

  async showConfirm(titulo: string, mensagem: string): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: titulo,
        cssClass: 'modalClass',
        message: `<div class="messageMedalModal">
                  <label class="labelTextMedal">` + mensagem + `</label>
                </div>`,
        buttons: [
          {
            text: 'Sim',
            cssClass: 'danger',
            handler: () => {
              return resolve(true);
            }
          },
          {
            text: 'Cancelar',
            cssClass: 'danger',
            handler: () => {
              return resolve(false);
            }
          }
        ],
      });

      await alert.present();
    });
  }
  
  async showDialog(titulo: string, mensagem: string): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: titulo,
        cssClass: 'modalClass',
        message: `<div class="messageMedalModal">
                  <label class="labelTextMedal">` + mensagem + `</label>
                </div>`,
        buttons: [
          {
            text: 'Ok',
            cssClass: 'danger',
            handler: () => {
              return resolve(true);
            }
          }
        ],
      });

      await alert.present();
    });
  }
}