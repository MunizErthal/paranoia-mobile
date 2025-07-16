import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage {

  constructor(private navCtrl: NavController,
              private route: ActivatedRoute) { }
  
  backButton() {
    this.route.queryParams.subscribe((params: { [x: string]: string; }) => {
      let userDTO = params['userDTO'];
      let friendInvite = params['friendInvite'];
      let contratoAcept = params['contratoAcept'];
      let indicadoPor = params['indicadoPor'];
      let indicadoPorBoolean = params['indicadoPorBoolean'];
      let bestFriendHash = params['bestFriendHash'];
      let passwordConfirm = params['passwordConfirm'];
      
      if (params) {
        let currentUser: NavigationExtras = {
          queryParams: {
            userDTO: userDTO,
            friendInvite: friendInvite,
            contratoAcept: contratoAcept,
            indicadoPor: indicadoPor,
            indicadoPorBoolean: indicadoPorBoolean,
            bestFriendHash: bestFriendHash,
            passwordConfirm: passwordConfirm
          }
        };
        
        this.navCtrl.navigateForward('cadastro', currentUser);
      } else {
        this.navCtrl.navigateForward('cadastro');
      }
    });
  }
}
