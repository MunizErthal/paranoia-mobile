import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { AlertService } from 'src/shared/toast/toast.service';
import { UsuarioCadastro } from 'src/shared/model/2024/usuario-cadastro';
import { UsuarioService } from 'src/shared/services/requisicoes/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  friendInvite = false;
  contratoAcept = false;
  userDTO: UsuarioCadastro;
  passwordConfirm = '';
  indicadoPor = '';
  indicadoPorBoolean = false;

  cadastrarText = 'CADASTRAR';
  dotVerify = '';
  labelCadastroChange = false;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private usuarioService: UsuarioService,
              private toastService: AlertService) {
    this.userDTO = new UsuarioCadastro();
  }

  ionViewWillEnter() {
    // Se vier do contrato
    this.route.queryParams.subscribe((params) => {
      if (params && params['userDTO']) {
        this.userDTO = params['userDTO'];
        this.friendInvite = params['friendInvite'];
        this.contratoAcept = params['contratoAcept'];
        this.indicadoPor = params['indicadoPor'];
        this.indicadoPorBoolean = params['indicadoPorBoolean'];
        this.passwordConfirm = params['passwordConfirm'];
      } else {
        this.userDTO = new UsuarioCadastro();
      }
    });
  }

  finalizarCadastro() {
    if (!this.validCpfCalc(this.userDTO.cpf)) {
      this.toastService.showError('O CPF ' + this.userDTO.cpf + ' é inválido.');
    } else {
      this.labelCadastroChange = true;
      this.animacaoLabelCadastro();
      this.cadastrar();
    }
  }

  cadastrar() {
    this.usuarioService.criar(this.userDTO)
    .subscribe({
      next: () => this.cadastroFinalizado(),
      error: () => { this.labelCadastroChange = false; }
    });
  }

  cadastroFinalizado() {
    this.toastService.showSuccess('Bem vindo a família Paranoia, ' + this.userDTO.nome + '.');
    this.navCtrl.pop();
    this.labelCadastroChange = false;
  }

  verificarIndicadoPor(): Promise<boolean> {
    return new Promise(resolve => 
      this.usuarioService.verificarIndicadoPor(this.indicadoPor)
      .subscribe({
        next: data => {
          this.indicadoPorBoolean = data as boolean; 
          this.toastService.showSuccess('E-mail válido.');
          resolve(true);
        }
      }));
  }

  validCpfCalc(strCPF: any) {
    strCPF = strCPF.replace('.', '').replace('.', '');
    strCPF = strCPF.replace('-', '');

    let soma, resto;
    soma = 0;

    if (strCPF === '00000000000') {
      return false;
    }

    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;
    }

    if ((resto === 10) || (resto === 11))  {
      resto = 0;
    }

    if (resto !== parseInt(strCPF.substring(9, 10))) {
      return false;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
      resto = 0;
    }

    if (resto !== parseInt(strCPF.substring(10, 11))) {
      return false;
    }

    return true;
  }

  backButton() {
    this.navCtrl.navigateRoot('login');
  }

  changeFriendMail() {
    this.friendInvite = !this.friendInvite;
  }

  changeConfirm() {
    this.contratoAcept = !this.contratoAcept;
  }

  contrato() {
    let currentUser: NavigationExtras = {
      queryParams: {
        userDTO: this.userDTO,
        friendInvite: this.friendInvite,
        contratoAcept: this.contratoAcept,
        indicadoPor: this.indicadoPor,
        indicadoPorBoolean: this.indicadoPorBoolean,
        passwordConfirm: this.passwordConfirm
      }
    };

    this.navCtrl.navigateForward('contrato', currentUser);
  }

  animacaoLabelCadastro() {
    setTimeout(() => {
      if (this.labelCadastroChange) {
        this.dotVerify = this.dotVerify.length === 0 ? '.' : (this.dotVerify.length === 1 ? '..' : (this.dotVerify.length === 2 ? '...' : ''));
        this.cadastrarText = 'VERIFICANDO' + this.dotVerify;
        this.animacaoLabelCadastro();
      } else {
        this.cadastrarText = 'CADASTRAR';
      }
    }, 350);
  }

  readonly phoneMask: MaskitoOptions = {
    mask: ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly cpfMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
}
