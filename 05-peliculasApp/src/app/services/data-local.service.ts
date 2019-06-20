import { Injectable } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) { }

  guardarPelicula( pelicula: PeliculaDetalle ) {

    let existe = false;

    let mensaje = '';

    for ( const peli of this.peliculas ) {

      if ( peli.id === pelicula.id ) {

        existe = true;

        break;

      }

    }

    if ( existe ) {

      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );

      mensaje = 'Removido de favoritos';

    } else {

      this.peliculas.push( pelicula );

      mensaje = 'Agregada a favoritos';

    }

    this.presentToast( mensaje );

    this.storage.set('peliculas', this.peliculas);

  }

  async presentToast( message: string ) {

    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });

    toast.present();

  }
}
