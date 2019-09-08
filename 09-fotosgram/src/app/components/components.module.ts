import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

// Components
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AvatarSelectorComponent,
    MapaComponent,
    PostComponent,
    PostsComponent
  ],
  exports: [
    AvatarSelectorComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
