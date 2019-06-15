import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private htpp: HttpClient
  ) { }

  getFeature() {

    return this.htpp.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-05-01&primary_release_date.lte=2019-05-31&api_key=7a3f4cbe05801e3adbec1ac98275422d&languague=es&include_image_language=es`);

  }
}
