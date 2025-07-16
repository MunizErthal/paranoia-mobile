import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {BaseService} from '../shared/services/requisicoes/base';

//import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
//import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
//import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Interceptador } from 'src/shared/interceptor/interceptador';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      innerHTMLTemplatesEnabled: true,
      animated: false,
      scrollPadding: true,
      scrollAssist: true
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 
        RouteReuseStrategy,
        useClass: IonicRouteStrategy
    },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptador, multi: true },
    BaseService, 
    SplashScreen, 
    StatusBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
