import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// Interfaces
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() indice: number;
  @Input() noticia: Article;

  constructor(
    private iab: InAppBrowser
  ) { }

  ngOnInit() {}

  abrirNoticia() {

    const browser = this.iab.create(this.noticia.url, '_system');

  }

}
