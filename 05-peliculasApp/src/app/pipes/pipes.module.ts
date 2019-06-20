import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroImagenPipe } from './filtro-imagen.pipe';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';

@NgModule({
  declarations: [
    FiltroImagenPipe,
    ImagenPipe,
    ParesPipe
  ],
  exports: [
    FiltroImagenPipe,
    ImagenPipe,
    ParesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
