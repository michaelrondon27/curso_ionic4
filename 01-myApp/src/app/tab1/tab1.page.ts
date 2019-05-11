import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ngOnInit() {

    let numero = 10;

    debugger;

    numero += 10;

    numero *= 2;

    numero -= 10;

    console.log({ numero });

  }

}
