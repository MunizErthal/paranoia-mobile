import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitorQrPage } from './leitor-qr.page';

const routes: Routes = [
  {
    path: '',
    component: LeitorQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitorQrPageRoutingModule {}
