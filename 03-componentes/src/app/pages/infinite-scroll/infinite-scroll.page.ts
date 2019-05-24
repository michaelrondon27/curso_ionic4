import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) InfiniteScrollPage: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ) {

    console.log('Cargando...');

    setTimeout( () => {

      if ( this.data.length > 50 ) {
        event.target.complete();
        this.InfiniteScrollPage.disabled = true;
        return;
      }

      const nuevoArr = Array(20);

      this.data.push( ...nuevoArr );

      event.target.complete();

    }, 1000);

  }

}
