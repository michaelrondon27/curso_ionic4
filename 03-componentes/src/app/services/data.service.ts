import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interfaces
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');

  }

  getMenuOpts() {

    return this.http.get<Componente[]>('/assets/data/menu.json');

  }

  getAlbumnes() {

    return this.http.get('https://jsonplaceholder.typicode.com/albums');

  }

  getHeroes() {

    return this.http.get<Componente[]>('/assets/data/superheroes.json');

  }
}
