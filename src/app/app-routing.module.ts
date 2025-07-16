import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'contrato',
    loadChildren: () => import('./contrato/contrato.module').then( m => m.ContratoPageModule)
  },
  {
    path: 'desafio',
    loadChildren: () => import('./desafio/desafio.module').then( m => m.DesafioPageModule)
  },
  {
    path: 'dica-select',
    loadChildren: () => import('./dica-select/dica-select.module').then( m => m.DicaSelectPageModule)
  },
  {
    path: 'dicas',
    loadChildren: () => import('./dicas/dicas.module').then( m => m.DicasPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./equipe/equipe.module').then( m => m.EquipePageModule)
  },
  {
    path: 'leitor-qr',
    loadChildren: () => import('./leitor-qr/leitor-qr.module').then( m => m.LeitorQrPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'A_ENTREGA_DE_MAKAROV',
    loadChildren: () => import('./makarov-call/makarov-call.module').then( m => m.MakarovCallPageModule)
  },
  {
    path: 'medalhas',
    loadChildren: () => import('./medalhas/medalhas.module').then( m => m.MedalhasPageModule)
  },
  {
    path: 'meus-tempos',
    loadChildren: () => import('./meus-tempos/meus-tempos.module').then( m => m.MeusTemposPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'user-ranking',
    loadChildren: () => import('./user-ranking/user-ranking.module').then( m => m.UserRankingPageModule)
  },
  {
    path: 'video-play',
    loadChildren: () => import('./video-play/video-play.module').then( m => m.VideoPlayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
