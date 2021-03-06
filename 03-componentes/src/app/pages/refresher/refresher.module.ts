import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefresherPage } from './refresher.page';

// Modules
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RefresherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RefresherPage]
})
export class RefresherPageModule {}
