import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Posts',
      path: '/posts'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
