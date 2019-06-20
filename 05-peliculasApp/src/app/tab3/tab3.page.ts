import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  generos: Genre[] = [];

  peliculas: PeliculaDetalle[] = [];

  constructor(
    private dataLocalService: DataLocalService,
    private moviesService: MoviesService
  ) {}

  async ngOnInit() {

    this.peliculas = await this.dataLocalService.cargarFavoritos();

    this.generos = await this.moviesService.cargarGeneros();

  }

}
