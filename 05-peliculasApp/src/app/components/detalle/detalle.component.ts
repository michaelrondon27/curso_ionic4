import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  actores: Cast[] = [];

  estrella = 'star-outline';

  oculto = 150;

  pelicula: PeliculaDetalle = {};

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  @Input() id;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocalService: DataLocalService
  ) { }

  ngOnInit() {

    this.dataLocalService.existePelicula( this.id ).then( existe => this.estrella = (existe) ? 'star' : 'star-outline' );

    this.moviesService.getPeliculaDetalle( this.id ).subscribe( resp => {

      this.pelicula = resp;

    });

    this.moviesService.getActoresPelicula( this.id ).subscribe( resp => {

      this.actores = resp.cast;

    });

  }

  regresar() {

    this.modalCtrl.dismiss();

  }

  favorito() {

    const existe = this.dataLocalService.guardarPelicula( this.pelicula );

    this.estrella = (existe) ? 'star' : 'star-outline';

  }

}
