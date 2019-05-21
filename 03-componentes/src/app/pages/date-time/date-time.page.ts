import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ) {

    console.log('ionchange', event);

    console.log('Date', new Date( event.detail.value));

  }

}
