import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.scss']
})
export class ToolbarClientComponent implements OnInit {

  userId: string = '';
  userType: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {
    // Obtiene el id del usuario
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      console.log('User id:' + this.userId);
    });
    
    // Obtiene el tipo de usuario
    this.route.url.subscribe(url => {
      this.userType = url[0].path;
      console.log('User type:' + this.userType);
    });
  }

  ngOnInit(): void {}

  pageLanding(){
    this.router.navigateByUrl('/landing-page');
  }

  pageHistoryCards(){
    this.router.navigateByUrl(`client/${this.userId}/history-cards`);
  }
  pageCompanyTable(){
    this.router.navigateByUrl(`client/${this.userId}/company-table`);
  }
  pageSettings(){
    this.router.navigateByUrl(`client/${this.userId}/client-settings`);
  }
}
