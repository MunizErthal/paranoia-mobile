import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusTemposPage } from './meus-tempos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusTemposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusTemposPageRoutingModule {}
