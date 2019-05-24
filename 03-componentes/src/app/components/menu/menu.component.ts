import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

// Interfaces
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();

  }

}
