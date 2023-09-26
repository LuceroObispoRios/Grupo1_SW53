import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-company',
  templateUrl: './toolbar-company.component.html',
  styleUrls: ['./toolbar-company.component.scss']
})
export class ToolbarCompanyComponent {

  constructor(private router: Router) { }
  
  pageSettings(){
    this.router.navigateByUrl('/company-settings/:id');
  }

  pageMembership(){
    this.router.navigateByUrl('/membership');
  }

  pageLanding(){
    this.router.navigateByUrl('/landing-page');
  }

}
