import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Convite } from 'src/shared/model/2024/convite';
import { Equipe } from 'src/shared/model/2024/equipe';
import { Usuario } from 'src/shared/model/2024/usuario';
import { EquipeService } from 'src/shared/services/requisicoes/equipe';
import { UsuarioService } from 'src/shared/services/requisicoes/usuario';
import { AlertService } from 'src/shared/toast/toast.service';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  styleUrls: ['./equipe.page.scss'],
})
export class EquipePage {
  equipes: Equipe[] = [];
  convites: Convite[] = [];

  nome = '';
  equipeSelecionada: Equipe;

  // Convite Form
  emailConvite = '';
  
  constructor(public equipeService: EquipeService,
              public navCtrl: NavController,
              public usuarioService: UsuarioService,
              public menuCtrl: MenuController, 
              public alertService: AlertService) {}


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.equipeService.obterEquipes().subscribe({
      next: data => {
        this.equipes = data as Equipe[];
      }});

    this.equipeService.obterConvites().subscribe({
      next: data => {
        this.convites = data as Convite[];
      }});
  }
  
  criarEquipe(criarEquipeModal: any) {
    this.equipeService.criar(this.nome).subscribe({
      next: data => {
        criarEquipeModal.dismiss();
        this.alertService.showSuccess('Equipe criada com sucesso.');
        this.equipes.push(data as Equipe);
      }});
  }

  editarEquipe(editarEquipeModal: any) {
    this.equipeService.editar(this.equipeSelecionada).subscribe({
      next: () => {
        editarEquipeModal.dismiss();
        this.alertService.showSuccess('Equipe alterada com sucesso.')
      }});
  }

  async sairDaEquipe() {
    const confirm = await this.alertService.showConfirm('', 'Você tem certeza que deseja sair da equipe?');
    if (confirm) {
      this.equipeService.sairDaEquipe(this.equipeSelecionada.id).subscribe({
        next: () => {
          this.equipes = this.equipes.filter(equipe => equipe.id !== this.equipeSelecionada.id);
        }});
    }
  }

  async excluirEquipe() {
    const confirm = await this.alertService.showConfirm('', 'Você tem certeza que deseja excluir a equipe?');
    if (confirm) {
      this.equipeService.deletar(this.equipeSelecionada.id).subscribe({
        next: () => {
          this.equipes = this.equipes.filter(equipe => equipe.id !== this.equipeSelecionada.id);
        }});
    }
  }

  convidarMembro(convidarMembroModal: any) {
    this.equipeService.enviarConvite(this.equipeSelecionada.id, this.emailConvite).subscribe({
      next: data => {
          convidarMembroModal.dismiss();
          this.alertService.showSuccess('Convite enviado com sucesso para ' + data.nome);
          this.emailConvite = '';
      }});
  }

  async removerMembro(usuarioRemovido: Usuario) {
    const confirm = await this.alertService.showConfirm('', 'Você tem certeza que deseja remover ' + usuarioRemovido.nome + ' da equipe?');
    if (confirm) {
      this.equipeService.removerMembro(this.equipeSelecionada.id, usuarioRemovido.hash).subscribe({
        next: () => {
            this.equipeSelecionada.usuarios = this.equipeSelecionada.usuarios.filter(usuario => usuario.hash !== usuarioRemovido.hash);
        }});
    }
  }

  responderConvite(resposta: any, conviteId: any) {
    this.equipeService.responderConvite(conviteId, resposta).subscribe({
      next: data => {
        this.convites = this.convites.filter(convite => convite.id !== conviteId);
        this.alertService.showSuccess('Convite respondido com sucesso.');
        this.equipes.push(data as Equipe);
      }});
  }

  backButton() {
    this.navCtrl.navigateBack('home');
  }

  changeEquipeView(equipeParam: Equipe) {
      equipeParam.expandida = !equipeParam.expandida;
      this.equipes.filter(equipe => equipe.id != equipeParam.id)
        .forEach(equipe => equipe.expandida = false);

      if (equipeParam.expandida) {
        this.equipeSelecionada = equipeParam;
      }
  }
}
