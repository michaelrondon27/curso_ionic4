import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    SocialSharing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
