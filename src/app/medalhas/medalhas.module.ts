import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedalhasPageRoutingModule } from './medalhas-routing.module';

import { MedalhasPage } from './medalhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedalhasPageRoutingModule
  ],
  declarations: [MedalhasPage]
})
export class MedalhasPageModule {}
