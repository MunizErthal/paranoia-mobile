import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakarovCallPageRoutingModule } from './makarov-call-routing.module';

import { MakarovCallPage } from './makarov-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakarovCallPageRoutingModule
  ],
  declarations: [MakarovCallPage]
})
export class MakarovCallPageModule {}
