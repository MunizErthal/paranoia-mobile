import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DicaSelectPageRoutingModule } from './dica-select-routing.module';

import { DicaSelectPage } from './dica-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DicaSelectPageRoutingModule
  ],
  declarations: [DicaSelectPage]
})
export class DicaSelectPageModule {}
