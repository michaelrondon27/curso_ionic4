import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    email: 'mrondon72@gmail.com',
    password: '123456'
  };

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    this.slides.lockSwipes( true );

  }

  async login( fLogin: NgForm ) {

    if ( fLogin.invalid) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {

      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );

    } else {

      // mostrar alerta de usuario y contraseña no correctas

    }

  }

  registro( fReistro: NgForm ) {

    console.log( fReistro.valid );

  }

  seleccionarAvatar( avatar ) {

    this.avatars.forEach( av => av.seleccionado = false );

    avatar.seleccionado = true;

  }

  mostrarLogin() {

    this.slides.lockSwipes( false );

    this.slides.slideTo( 0 );

    this.slides.lockSwipes( true );

  }

  mostrarRegistro() {

    this.slides.lockSwipes( false );

    this.slides.slideTo( 1 );

    this.slides.lockSwipes( true );

  }

}
