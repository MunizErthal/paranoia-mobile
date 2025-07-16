import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakarovCallPage } from './makarov-call.page';

const routes: Routes = [
  {
    path: '',
    component: MakarovCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakarovCallPageRoutingModule {}
