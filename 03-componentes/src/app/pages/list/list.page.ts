import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

}
