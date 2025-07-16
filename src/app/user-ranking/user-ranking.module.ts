import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRankingPageRoutingModule } from './user-ranking-routing.module';

import { UserRankingPage } from './user-ranking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRankingPageRoutingModule
  ],
  declarations: [UserRankingPage]
})
export class UserRankingPageModule {}
