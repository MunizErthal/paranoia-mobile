import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusTemposPageRoutingModule } from './meus-tempos-routing.module';

import { MeusTemposPage } from './meus-tempos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusTemposPageRoutingModule
  ],
  declarations: [MeusTemposPage]
})
export class MeusTemposPageModule {}
