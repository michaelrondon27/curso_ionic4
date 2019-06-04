import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

// Services
import { NoticiasService } from '../../services/noticias.service';

// Interfaces
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categorias = [
    'business',
    'entertaiment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];

  noticias: Article[] = [];

  @ViewChild(IonSegment) segment: IonSegment;

  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {

    this.segment.value = this.categorias[0];

    this.cargarNoticias( this.categorias[0] );

  }

  cambioCategoria( event ) {

    this.noticias = [];

    this.cargarNoticias( event.detail.value );

  }

  cargarNoticias( categoria ) {

    this.noticiasService.getTopHeadlinesCategoria( categoria ).subscribe( resp => {

      this.noticias.push( ...resp.articles );

    });

  }

}
