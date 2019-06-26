import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    private oneSignal: OneSignal
  ) { }

  configuracionInicial() {

    this.oneSignal.startInit('4d6ab412-1036-4a55-8dc6-1521b1aadcc2', '839546648164');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe( (noti) => {
      // do something when notification is received
      console.log('Notificacion recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe( (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
    });

    this.oneSignal.endInit();

  }
}
