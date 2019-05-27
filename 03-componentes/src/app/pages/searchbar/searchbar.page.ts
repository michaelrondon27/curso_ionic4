import { Component, OnInit } from '@angular/core';

// Services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumnes: any[] = [];

  textoBuscar = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.getAlbumnes().subscribe( (albumnes: any) => {

      console.log(albumnes);

      this.albumnes = albumnes;

    });

  }

  buscar( event ) {

    this.textoBuscar = event.detail.value;

  }

}
