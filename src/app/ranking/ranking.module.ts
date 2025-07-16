import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingPageRoutingModule } from './ranking-routing.module';

import { RankingPage } from './ranking.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingPageRoutingModule
  ],
  declarations: [RankingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RankingPageModule {}
