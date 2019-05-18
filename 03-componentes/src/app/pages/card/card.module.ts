import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardPage } from './card.page';

// Modules
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CardPage
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
  declarations: [CardPage]
})
export class CardPageModule {}
