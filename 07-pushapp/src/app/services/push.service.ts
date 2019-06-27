import { Injectable } from '@angular/core';
import { OneSignal, OSNotification } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [
    {
      title: 'Titulo del psuh',
      body: 'Este es el body del push',
      date: new Date()
    }
  ];

  constructor(
    private oneSignal: OneSignal
  ) { }

  configuracionInicial() {

    this.oneSignal.startInit('4d6ab412-1036-4a55-8dc6-1521b1aadcc2', '839546648164');

    this.oneSignal.inFocusDisplaying( this.oneSignal.OSInFocusDisplayOption.Notification );

    this.oneSignal.handleNotificationReceived().subscribe( (noti) => {
      // do something when notification is received
      this.notificacionRecibida( noti );
    });

    this.oneSignal.handleNotificationOpened().subscribe( (noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
    });

    this.oneSignal.endInit();

  }

  notificacionRecibida( noti: OSNotification ) {

    const payload = noti.payload;

    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID );

    if ( existePush ) {
      return;
    }

    this.mensajes.unshift( payload );

  }
}
