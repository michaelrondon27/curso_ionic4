import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private iab: InAppBrowser
  ) {

    this.cargarStorage();

  }

  async cargarStorage() {

    this.guardados = await this.storage.get('registros') || [];

  }

  async guardarRegistro( format: string, text: string ) {

    await this.cargarStorage();

    const nuevoRegistro = new Registro( format, text );

    this.guardados.unshift(nuevoRegistro);

    this.storage.set('registros', this.guardados);

    this.abrirRegistro( nuevoRegistro );

  }

  abrirRegistro( registro: Registro ) {

    this.navCtrl.navigateForward('/tabs/tabs2');

    switch ( registro.type ) {

      case 'http':
        this.iab.create( registro.text, '_system');
        break;

      case 'geo':
        break;

      default:
        break;

    }

  }
}
