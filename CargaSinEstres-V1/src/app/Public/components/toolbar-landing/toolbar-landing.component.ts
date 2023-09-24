import { Component } from '@angular/core';


@Component({
  selector: 'app-toolbar-landing',
  templateUrl: './toolbar-landing.component.html',
  styleUrls: ['./toolbar-landing.component.scss']
})

export class ToolbarLandingComponent {

  drawer: boolean = false;
  items = [
    { label: 'Inicio', to: '/' },
    { label: 'Iniciar Sesion', to: '/login-form' },
    { label: 'Registrar Cliente', to: '/client-form' },
    { label: 'Registrar Empresa', to: '/company-form' },
  ];
}
