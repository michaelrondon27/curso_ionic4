import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Interfaces
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage = 0;

  constructor(
    private http: HttpClient
  ) { }

  private ejecutarQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers } );

  }

  getTopHeadlines() {

    this.headlinesPage++;

    return this.ejecutarQuery<RespuestaTopHeadlines>( `/top-headlines?country=us&page=${ this.headlinesPage }` );

  }

  getTopHeadlinesCategoria( categoria: string ) {

    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);

  }
}
