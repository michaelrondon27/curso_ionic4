import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UIServiceService } from '../../services/uiservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor(
    private usuarioService: UsuarioService,
    private uiService: UIServiceService
  ) {}

  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();

  }

  async actualizar( fActualizar: NgForm ) {

    if ( fActualizar.invalid ) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );

    if ( actualizado ) {

      this.uiService.presentToast( 'Registro actualizado' );

    } else {

      this.uiService.presentToast( 'No se pudo actualizar' );

    }

  }

  logout() {



  }

}
