import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  @Input() peliculas: Pelicula[] = [];

  @Output() cargarMas = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick() {

    this.cargarMas.emit();

  }

}
