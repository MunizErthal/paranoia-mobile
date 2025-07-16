import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeitorQrPageRoutingModule } from './leitor-qr-routing.module';

import { LeitorQrPage } from './leitor-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeitorQrPageRoutingModule
  ],
  declarations: [LeitorQrPage]
})
export class LeitorQrPageModule {}
