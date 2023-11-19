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
    client: any = '';

    companyId: any = '';
    clientId: any = '';

    reviews: any = [];
    averageRating: any = null;
    reviewFilter: string = 'all';
    stars: number[] = Array(5).fill(0);

    numeroTarjeta: string = '';
    CVV: string = '';
    fechaVencimiento: string = '';

    reservation: any = {
      //company: undefined,
      //client: undefined, 
      pickupAddress: undefined,
      destinationAddress: undefined,
      movingDate: undefined,
      movingTime: undefined,
      services: undefined,
    };

    userId: string = '';
    constructor(private api: CargaSinEstresDataService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { 
      this.activatedRoute.params.subscribe(
        params => {
          this.companyId = params['id'];
          this.getCompany(params['id']);
          console.log('Company id: ', params['id']);
        }
      );

        // Obtiene el id del usuario
      this.activatedRoute.pathFromRoot[1].url.subscribe(
        url => {
          //console.log('url: ', url);
          this.userId = url[1].path;
          this.clientId = parseInt(this.userId);
          console.log('User id:' + this.userId);
        }
      ); 
    }
  
    ngOnInit(): void {
      this.fetchReviews();
      console.log('Reviews en HTML', this.reviews);
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
      this.api.getCompanyById(id).subscribe(
        (res: any) => 
        {
          console.log("Company detail:", (res));
          this.company = res;
        },
        err => {
          console.log("Error:", err);
        }
      );
    }

    getClient(id: any){
      this.api.getClientById(id).subscribe(
        (res: any) => 
        {
          console.log("Client detail:", (res));
          this.client = res;
        },
        err => {
          console.log("Error:", err);
        }
      );
    }


    addReservation() {
      console.log('name:', this.company.name);
      //this.reservation.status="En curso";
      //this.reservation.payment=0;
      this.api.createReservation(this.clientId, this.companyId,this.reservation).subscribe(
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
      this.api.getReviewsByCompanyId(this.companyId).subscribe((res: any) => 
        {
          
          this.reviews = res;
          console.log("Reviews:", this.reviews);
          this.averageRating = this.reviews.reduce((acc: any, review: any) => acc + review.rating, 0) / this.reviews.length;
          this.averageRating = Math.round(this.averageRating);
        },
        err => {
          console.log("Error:", err);
        }
      );
    }

    getStars(rating: number): number[] {
      if(!rating ){
        return Array(0).fill(0);
      }
      else{
      rating = Math.round(rating);
      console.log(rating);
      return Array(rating).fill(0);
      }
    }

    ReturnToCompanyTable(){
      this.router.navigateByUrl(`client/${this.userId}/company-table`);
    }
}

