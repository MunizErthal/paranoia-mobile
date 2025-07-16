import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPlayPageRoutingModule } from './video-play-routing.module';

import { VideoPlayPage } from './video-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoPlayPageRoutingModule
  ],
  declarations: [VideoPlayPage]
})
export class VideoPlayPageModule {}
