import { Component, OnInit, Input } from '@angular/core';

// Interfaces
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Input() enFavoritos = false;
  @Input() noticias: Article[];

  constructor() { }

  ngOnInit() {}

}
