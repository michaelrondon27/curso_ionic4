import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: OSNotificationPayload[] = [];

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(
    private oneSignal: OneSignal,
    private storage: Storage
  ) {

    this.cargarMensajes();

  }

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

  async notificacionRecibida( noti: OSNotification ) {

    await this.cargarMensajes();

    const payload = noti.payload;

    const existePush = this.mensajes.find( mensaje => mensaje.notificationID === payload.notificationID );

    if ( existePush ) {
      return;
    }

    this.mensajes.unshift( payload );

    this.pushListener.emit( payload );

    this.guardarMensajes();

  }

  guardarMensajes() {

    this.storage.set('mensajes', this.mensajes);

  }

  async cargarMensajes() {

    this.mensajes = await this.storage.get('mensajes') || [];

  }

  async getMensajes() {

    await this.cargarMensajes();

    return [...this.mensajes];

  }
}
