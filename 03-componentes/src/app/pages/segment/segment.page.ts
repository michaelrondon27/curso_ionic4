import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  publisher = '';

  superHeroes: Observable<any>;

  @ViewChild(IonSegment) segment: IonSegment;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.segment.value = 'todos';

    this.superHeroes = this.dataService.getHeroes();

  }

  segmentChanged( event ) {

    const valorSegmento = event.detail.value;

    if ( valorSegmento === 'todos' ) {

      this.publisher = '';

      return;

    }

    this.publisher = valorSegmento;

  }

}
