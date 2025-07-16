import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRankingPage } from './user-ranking.page';

const routes: Routes = [
  {
    path: '',
    component: UserRankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRankingPageRoutingModule {}
