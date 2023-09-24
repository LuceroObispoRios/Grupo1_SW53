import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent {

  vigencia1: string = '3 mes';
  vigencia2: string = '6 meses';
  vigencia3: string = '12 meses';

  constructor(private router: Router) { }

  IrAFormulario() {
    this.router.navigate(['/payment-form']);
  }


}

