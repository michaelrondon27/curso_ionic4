import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private movieService: MoviesService
  ) {}

  ngOnInit() {

    this.movieService.getFeature().subscribe( console.log );

  }

}
