import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

// Interfaces
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(
    private storage: Storage,
    public toastCtrl: ToastController
  ) {

    this.cargarFavoritos();

  }

  async presentToast( message: string ) {

    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });

    toast.present();

  }

  guardarNoticia( noticia: Article ) {

    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if ( !existe ) {

      this.noticias.unshift( noticia );

      this.storage.set('favoritos', this.noticias);

    }

    this.presentToast( 'Agregado a favoritos' );

  }

  async cargarFavoritos() {

    const favoritos = await this.storage.get('favoritos');

    if ( favoritos ) {

      this.noticias = favoritos;

    }

  }

  borrarNoticia( noticia: Article ) {

    this.noticias = this.noticias.filter( noti => noti.title !== noticia.title );

    this.storage.set('favoritos', this.noticias);

    this.presentToast( 'Borrado de favoritos' );

  }
}
