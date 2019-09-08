import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cargandoGeo = false;

  post = {
    mensaje: '',
    coords: null,
    posicion: false
  };

  tempImages: string[] = [];

  constructor(
    private postService: PostsService,
    private router: Router,
    private geolocation: Geolocation
  ) {}

  async crearPost() {

    const creado = await this.postService.crearPost( this.post );

    this.post = {
      mensaje: '',
      coords: null,
      posicion: false
    };

    this.router.navigateByUrl('/main/tabs/tab1');

  }

  getGeo() {

    if ( !this.post.posicion ) {

      this.post.coords = null;

      this.cargandoGeo = false;

      return;

    }

    this.cargandoGeo = true;

    this.geolocation.getCurrentPosition().then((resp) => {

      this.cargandoGeo = false;

      const coords = `${ resp.coords.latitude },${ resp.coords.longitude }`;

      this.post.coords = coords;

    }).catch((error) => {

      this.cargandoGeo = false;

    });

  }

}
