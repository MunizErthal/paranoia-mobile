import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicaSelectPage } from './dica-select.page';

const routes: Routes = [
  {
    path: '',
    component: DicaSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicaSelectPageRoutingModule {}
