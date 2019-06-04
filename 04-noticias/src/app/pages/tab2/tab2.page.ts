import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

// Services
import { NoticiasService } from '../../services/noticias.service';

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

  @ViewChild(IonSegment) segment: IonSegment;

  constructor(
    private noticiasService: NoticiasService
  ) { }

  ngOnInit() {

    this.segment.value = this.categorias[0];

    this.noticiasService.getTopHeadlinesCategoria( this.categorias[0] ).subscribe( resp => {

      console.log(resp);

    });

  }

}
