import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-landing',
  templateUrl: './toolbar-landing.component.html',
  styleUrls: ['./toolbar-landing.component.scss']
})

export class ToolbarLandingComponent {

  constructor(private router: Router) { }

  pageLanding(){
    this.router.navigateByUrl('/landing-page');
  }

  pageLoginForm(){
    this.router.navigateByUrl('/login');
  }
  pageClientForm(){
    this.router.navigateByUrl('/client-form');
  }
  pageCompanyForm(){
    this.router.navigateByUrl('/company-form');
  }
}
