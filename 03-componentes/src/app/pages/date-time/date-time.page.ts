import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  customDate;

  customPickerOptions;

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [
        {
          text: 'Save',
          handler: ( evento ) => {
            console.log('Clicked Save!');
            console.log(evento);
          }
        },
        {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }
      ]
    };

  }

  cambioFecha( event ) {

    console.log('ionchange', event);

    console.log('Date', new Date( event.detail.value));

  }

}
