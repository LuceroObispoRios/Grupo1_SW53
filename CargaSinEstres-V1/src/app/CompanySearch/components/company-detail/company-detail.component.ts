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

    reviews: any = [];
    averageRating: any = null;
    reviewFilter: string = 'all';
    stars: number[] = Array(5).fill(0);

    numeroTarjeta: string = '';
    CVV: string = '';
    fechaVencimiento: string = '';

    reservation: BookingHistory = {
      id: undefined,
      idCompany: '',
      idClient: '',
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
      },
      chat:{id:undefined,user: undefined, message: undefined, dateTime: undefined}
    };

    userId: string = '';
    constructor(private companyDataService: CargaSinEstresDataService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { 
      this.activatedRoute.params.subscribe(
        params => {
          this.getCompany(params['id']);
          this.reservation.idCompany = params['id'];
        }
      );

        // Obtiene el id del usuario
      this.activatedRoute.pathFromRoot[1].url.subscribe(
        url => {
          console.log('url: ', url);
          this.userId = url[1].path;
          console.log('User id:' + this.userId);
        }
      ); 
    }
  
    ngOnInit(): void {
      this.fetchReviews();
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
      this.reservation.idClient = this.userId;
      this.companyDataService.createReservation(this.reservation).subscribe(
        (res: any) => 
        {
          console.log("Reservation created:", res);
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

      this.router.navigateByUrl(`client/${this.userId}/history-cards`);
    }

    fetchReviews() {
      this.companyDataService.getReviewsByCompanyId(this.reservation.idCompany).subscribe((res: any) => 
        {
          console.log("Reviews:", res);
          this.reviews = res;
          this.averageRating = this.reviews.reduce((acc: any, review: any) => acc + review.rating, 0) / this.reviews.length;
          this.averageRating = Math.round(this.averageRating);
        },
        err => {
          console.log("Error:", err);
        }
      );
    }

    getStars(rating: number): number[] {
      rating = Math.round(rating);
      return Array(rating).fill(0);
    }

    ReturnToCompanyTable(){
      this.router.navigateByUrl(`client/${this.userId}/company-table`);
    }
}

