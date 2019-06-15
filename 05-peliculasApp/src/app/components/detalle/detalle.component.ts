import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  actores: Cast[] = [];

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
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

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



  }

}
