import { NgModule } from '@angular/core';

// Pipes
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    FiltroPipe
  ],
  exports: [
    FiltroPipe
  ]
})
export class PipesModule { }
