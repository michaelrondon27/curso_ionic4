import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';

// Modules
import { ComponentsModule } from '../../components/components.module';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

// Pages
import { ModalInfoPage } from '../modal-info/modal-info.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ModalInfoPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ModalPage
  ],
  entryComponents: [
    ModalInfoPage
  ]
})
export class ModalPageModule {}
