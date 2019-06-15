import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Modules
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DetalleComponent } from './detalle/detalle.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [
    DetalleComponent,
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    SlideshowPosterComponent
  ],
  entryComponents: [
    DetalleComponent
  ],
  exports: [
    DetalleComponent,
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    SlideshowPosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
