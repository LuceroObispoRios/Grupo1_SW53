import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar-company',
  templateUrl: './toolbar-company.component.html',
  styleUrls: ['./toolbar-company.component.scss']
})
export class ToolbarCompanyComponent implements OnInit {

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

  pageSettings(){
    this.router.navigateByUrl(`company/${this.userId}/company-settings`);
  }

  pageMembership(){
    this.router.navigateByUrl(`company/${this.userId}/membership`);
  }

  pageHistoryCards(){
    this.router.navigateByUrl(`company/${this.userId}/history-cards`);
  }

}
