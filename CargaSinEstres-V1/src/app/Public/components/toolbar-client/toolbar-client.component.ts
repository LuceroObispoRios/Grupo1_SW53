import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.scss']
})
export class ToolbarClientComponent {

  constructor(private router: Router) { }

  pageHistoryCards(){
    this.router.navigateByUrl('/history-cards');
  }
  pageCompanyTable(){
    this.router.navigateByUrl('/company-table');
  }
  pageSettings(){
    this.router.navigateByUrl('/client-settings/:id');
  }
}
