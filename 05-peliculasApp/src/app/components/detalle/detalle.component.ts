import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {

    this.moviesService.getPeliculaDetalle( this.id ).subscribe( resp => {

      console.log(resp);

    });

    this.moviesService.getActoresPelicula( this.id ).subscribe( resp => {

      console.log(resp);

    });

  }

}
