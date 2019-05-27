import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Modules
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    PipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
