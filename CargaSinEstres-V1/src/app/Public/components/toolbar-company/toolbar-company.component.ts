import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-company',
  templateUrl: './toolbar-company.component.html',
  styleUrls: ['./toolbar-company.component.scss']
})
export class ToolbarCompanyComponent {

  constructor(private router: Router) { }

  pageCompanyTable(){
    this.router.navigateByUrl('/company-table');
  }
  pageSettings(){
    this.router.navigateByUrl('/company-settings/id:');
  }

}
