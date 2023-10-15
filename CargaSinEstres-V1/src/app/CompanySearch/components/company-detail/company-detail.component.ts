import { Component, OnInit, ViewChild } from '@angular/core';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookingHistory } from 'src/app/models/booking-history.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {
    @ViewChild('reservationForm', {static: false})
    reservationForm!: NgForm;

    company: any = '';

    reservation: BookingHistory = {
      id: undefined,
      idCompany: '',
      bookingDate: undefined,
      pickupAddress: undefined,
      destinationAddress: undefined,
      movingDate: undefined,
      movingTime: undefined,
      status: 'En curso',
      services: undefined,
      hiredCompany: {
        name: '',
        logo: ''
      },
      payment: {
        totalAmount: 0,
        paymentMethod: 'Por definir'
      }
    };

    constructor(private companyDataService: CargaSinEstresDataService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { 
      this.activatedRoute.params.subscribe(
        params => {
          this.getCompany(params['id']);
        }
      );
    }
  
    ngOnInit(): void {
    }

    openSnackBar(message: string) {
      this.snackBar.open(message, 'Cerrar', {
        panelClass: ['color-snackbar-created'],
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  
    getCompany(id: any) {
      this.companyDataService.getCompanyById(id).subscribe(
        (res: any) => 
        {
          console.log("Company detail:", (res[id-1]));
          this.company = res[id-1];
        },
        err => {
          console.log("Error:", err);
        }
      );
    }

    addReservation() {
      this.reservation.idCompany = this.company.id;
      this.reservation.hiredCompany.name = this.company.name;
      console.log('name:', this.company.name);
      this.reservation.hiredCompany.logo = this.company.photo;
      this.reservation.status="En curso";
      this.reservation.payment.totalAmount=0;
      this.reservation.payment.paymentMethod="Por definir";
      this.companyDataService.createReservation(this.reservation).subscribe(
        (res: any) => 
        {
          console.log("Reservation created:");
          console.log(res);
          this.openSnackBar('Reserva agregada exitosamente');
        },
        err => {
          console.log("Error:");
          console.log(err);
        }
      );
    }

    onSubmit() {
      this.addReservation();

      this.router.navigateByUrl('/history-cards');
    }
}

