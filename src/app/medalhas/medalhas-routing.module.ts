import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedalhasPage } from './medalhas.page';

const routes: Routes = [
  {
    path: '',
    component: MedalhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedalhasPageRoutingModule {}
