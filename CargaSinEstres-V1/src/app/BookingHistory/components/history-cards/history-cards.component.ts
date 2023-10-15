import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingHistory } from 'src/app/models/booking-history.model';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';

@Component({
  selector: 'app-history-cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent implements OnInit {

  bookingData!: BookingHistory;

  elementData!: any[];
  pageSlice!: any[];
  

  @ViewChild(MatPaginator, {static: true}) 
  paginator!: MatPaginator;

  userId: string = '';
  userType: string = '';
  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, private dialog: MatDialog, private route: ActivatedRoute) {
    this.bookingData = {} as BookingHistory;
    this.pageSlice = [];
    this.elementData = [];

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

  // getAllBookingHistory(id: any) {
  //   this.companyDataService.getAllBookingHistory().subscribe((response: any) => {
  //     this.elementData = response;
  //     console.log('data1: ', response);
  //     this.elementData = this.elementData.filter((element: any) => element.idClient == id);
  //     this.elementData.forEach((element, index) => {
  //       element.counter = index + 1;
  //     });

  //     this.elementData.reverse();
  //     console.log('data user id: ');
  //     console.log(this.elementData);
  //     this.pageSlice = this.elementData.slice(0, 4);
  //   })
  // }

  getBookingHistoryById(id: any) {  
    if(this.userType == 'client'){
      this.companyDataService.getBookingHistoryById(id).subscribe((response: any) => {
        this.elementData = response;
        console.log('data client: ', response);
        this.elementData.forEach((element, index) => {
          element.counter = index + 1;
        });
        this.elementData.reverse();
        console.log('data user id: ');
        console.log(this.elementData);
        this.pageSlice = this.elementData.slice(0, 4);
      })
    }else if(this.userType == 'company'){
      this.companyDataService.getBookingHistoryByCompanyId(id).subscribe((response: any) => {
        this.elementData = response;
        console.log('data company: ', response);
        this.elementData.forEach((element, index) => {
          element.counter = index + 1;
        });
        this.elementData.reverse();
        console.log('data user id: ');
        console.log(this.elementData);
        this.pageSlice = this.elementData.slice(0, 4);
      })
    }
  }

  openDialog() {
    this.dialog.open(ChatDialogComponent, {
      width: '600px'
    });
  }

}
