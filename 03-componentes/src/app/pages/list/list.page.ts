import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

// Services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor(
    private dataService: DataService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

  async presentToast( message: string ) {

    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });

    toast.present();

  }

  favorite( user ) {

    this.presentToast('Guardó en favoritos');

    this.lista.closeSlidingItems();

  }

  share( user ) {

    this.presentToast('Compartido!');

    this.lista.closeSlidingItems();

  }

  borrar( user ) {

    this.presentToast('Borrado!');

    this.lista.closeSlidingItems();

  }

}
