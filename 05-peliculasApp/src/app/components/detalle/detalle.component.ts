import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  pelicula: PeliculaDetalle = {};

  @Input() id;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {

    this.moviesService.getPeliculaDetalle( this.id ).subscribe( resp => {

      this.pelicula = resp;

    });

    this.moviesService.getActoresPelicula( this.id ).subscribe( resp => {

      console.log(resp);

    });

  }

}
