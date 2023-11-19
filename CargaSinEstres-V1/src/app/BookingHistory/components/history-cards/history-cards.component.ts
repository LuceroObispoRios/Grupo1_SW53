import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingHistory } from 'src/app/models/booking-history.model';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { Form, NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-history-cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent implements OnInit {

  bookingData!: BookingHistory;

  elementData!: any[];
  pageSlice!: any[];
  messages!: any[];
  

  @ViewChild(MatPaginator, {static: true}) 
  paginator!: MatPaginator;

  userId: string = '';
  userType: string = '';
  company: any;
  client: any;

  paymentForm: FormGroup;

  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, private dialog: MatDialog, private route: ActivatedRoute, private fb: FormBuilder) {
    this.bookingData = {} as any;
    this.pageSlice = [];
    this.elementData = [];
    this.messages = [];
    this.paymentForm = this.fb.group({
       payment: ['', Validators.required]
    });

    this.route.pathFromRoot[1].url.subscribe(
      url => {
        console.log('url: ', url);

        // Obtiene el tipo de usuario
        this.userType = url[0].path;
        console.log('User type:' + this.userType);

        // Obtiene el id del usuario
        this.userId = url[1].path;
        console.log('User id:' + this.userId);
      }
    );    
  }
  
  onPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.elementData.length) {
      endIndex = this.elementData.length;
    }
    this.pageSlice = this.elementData.slice(startIndex, endIndex);
  }

  ngOnInit(): void {
    this.getBookingHistoryById(this.userId);
  }

  getCompany(id: any) {
    this.companyDataService.getCompanyById(id).subscribe(
      (res: any) => 
      {
        console.log("Company detail:", (res));
        this.company = res;
        console.log('company: ', this.company);
      },
      err => {
        console.log("Error:", err);
      }
    );
  }

  getBookingHistoryById(id: any) {  
    if(this.userType == 'client'){
      this.companyDataService.getBookingHistoryById(id).subscribe((response: any) => {
        this.elementData = response; //booking history obtained
        console.log('reservas del cliente: ', response);

        this.elementData.forEach((element, index) => {
          element.counter = index + 1;
          element.isEditMode = false;
        });
        this.elementData.reverse();

        console.log('data user id: ');
        console.log(this.elementData);

        this.pageSlice = this.elementData.slice(0, 4);
      })
    }else 
    
    if(this.userType == 'company'){
      
      this.companyDataService.getBookingHistoryByCompanyId(id).subscribe((response: any) => {
        this.elementData = response; //obtained booking history
        console.log('reservas de la empresa: ', response);
        this.elementData.forEach((element, index) => {
          element.counter = index + 1;
          element.isEditMode = false;
        });
        this.elementData.reverse();
        console.log('data user id: ');
        console.log(this.elementData);
        this.pageSlice = this.elementData.slice(0, 4);
      })
    }
  }

  openDialog(element: any) {
    this.dialog.open(ChatDialogComponent, {
      width: '600px',
      data:{
        userId:this.userId, 
        userType: this.userType, 
        element
      }
    });
  }

  
  openDialogReview(element: any) {
    this.dialog.open(ReviewDialogComponent, {
      width: '600px',
      data: {
        userId: this.userId,
        userType: this.userType,
        company: element,
      }
    });
  }

  /* editar payment */

  isEditMode = false;
  paymentData!: any;

  editItem(element: any){
    this.paymentData = element.payment;
    element.isEditMode = true;
  }

  cancelEdit(element: any){
    element.isEditMode = false;
    //this.paymentForm.resetForm();
  }

  onSubmit(element: any){
    const payment = this.paymentForm.value.payment;
    console.log('valid');
    if(element.isEditMode){
      console.log('payment in edit mode');
      this.updatePayment(element, payment);
    }
    //this.cancelEdit(element);

  }

  updatePayment(element: any, newPayment: any){
    console.log('booking id: ', element.id);
    console.log('Payment data:', this.paymentData);
    const data = {
      payment: newPayment
    }
    console.log('data: ', data);
    this.companyDataService.updateBookingHistoryPayment(element.id, data).subscribe((response: any)=>{
      console.log('response update payment: ', response);
      this.getBookingHistoryById(this.userId);
      
    })
  }

  cancelBooking(element: any){
    const cancelStatus = 'Finalizado';
    this.companyDataService.updateBookingHistoryStatus(element.id, cancelStatus).subscribe((response: any)=>{
      console.log('response cancel booking: ', response);
      this.getBookingHistoryById(this.userId);
    });
  }
    
}

