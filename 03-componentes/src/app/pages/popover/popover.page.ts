import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

// Components
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  async mostrarPop() {

    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent
    });

    await popover.present();

  }

}
