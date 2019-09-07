import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UIServiceService } from '../../services/uiservice.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: 'mrondon72@gmail.com',
    password: '123456'
  };

  registerUser: Usuario = {
    email: 'test',
    password: '123456',
    nombre: 'Test',
    avatar: 'av-1.png'
  };

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UIServiceService
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

      this.uiService.alertaInformativa( 'Usuario y contraseña no son correctos.' );

    }

  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid) { return; }

    const valido = await this.usuarioService.registro( this.registerUser );

    if ( valido ) {

      this.navCtrl.navigateRoot( '/main/tabs/tab1', { animated: true } );

    } else {

      this.uiService.alertaInformativa( 'Ese correo electrónico ya existe.' );

    }

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
