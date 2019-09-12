import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

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
    private postsService: PostsService,
    private router: Router,
    private geolocation: Geolocation,
    private camera: Camera,
  ) {}

  async crearPost() {

    const creado = await this.postsService.crearPost( this.post );

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

  camara() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.procesarImagen( options );

  }

  libreria() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.procesarImagen( options );

  }

  procesarImagen( options: CameraOptions ) {

    this.camera.getPicture(options).then( (imageData) => {

      const img = window.Ionic.WebView.convertFileSrc( imageData );

      this.postsService.subirImagen( imageData );

      this.tempImages.push( img );

    }, (err) => {

    });

  }

}
