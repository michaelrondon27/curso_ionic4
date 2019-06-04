import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
