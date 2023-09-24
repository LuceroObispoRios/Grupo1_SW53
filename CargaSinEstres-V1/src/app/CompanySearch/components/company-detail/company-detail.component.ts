import { Component, OnInit, ViewChild } from '@angular/core';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Reservation } from 'src/app/models/reservation.model';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
    @ViewChild('reservationForm', {static: false})
    reservationForm!: NgForm;

    reservation: any = '';
    company: any = '';

    constructor(private companyDataService: CargaSinEstresDataService, private activatedRoute: ActivatedRoute) { 
      this.reservation ={} as Reservation;
      this.activatedRoute.params.subscribe(
        params => {
          this.getCompany(params['id']);
        }
      );
    }
  
    ngOnInit(): void {
    }
  
    getCompany(id: any) {
      this.companyDataService.getCompanyById(id).subscribe(
        (res: any) => 
        {
          console.log("Company detail:");
          console.log(res[id-1]);
          this.company = res[id-1];
        },
        err => {
          console.log("Error:");
          console.log(err);
        }
      );
    }


    addReservation() {
      this.reservation.idCompany = this.company.id;
      this.companyDataService.createReservation(this.reservation).subscribe(
        (res: any) => 
        {
          console.log("Reservation created:");
          console.log(res);
        },
        err => {
          console.log("Error:");
          console.log(err);
        }
      );
    }

    onSubmit() {
      this.addReservation();
    }
}

