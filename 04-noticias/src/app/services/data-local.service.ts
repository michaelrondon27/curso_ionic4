import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

// Interfaces
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor(
    private storage: Storage
  ) { }

  guardarNoticia( noticia: Article ) {

    const existe = this.noticias.find( noti => noti.title === noticia.title );

    if ( !existe ) {

      this.noticias.unshift( noticia );

      this.storage.set('favoritos', this.noticias);

    }

  }

  cargarFavoritos() {



  }
}
