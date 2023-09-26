import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { BookingHistory } from 'src/app/models/booking-history.model';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';


@Component({
  selector: 'app-history-cards',
  templateUrl: './history-cards.component.html',
  styleUrls: ['./history-cards.component.scss']
})
export class HistoryCardsComponent {

  bookingData!: BookingHistory;

  elementData!: BookingHistory[];
  pageSlice!: BookingHistory[];
  

  @ViewChild(MatPaginator, {static: true}) 
  paginator!: MatPaginator;

  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, private dialog: MatDialog) {
    this.bookingData = {} as BookingHistory;
    this.pageSlice = [];
    this.elementData = [];
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
    this.getAllBookingHistory();
    
    console.log('data3: ');
    console.log(this.pageSlice);
  }

  getAllBookingHistory() {
    this.companyDataService.getAllBookingHistory().subscribe((response: any) => {
      this.elementData = response;
      console.log('data1: ');
      console.log(response);
      this.elementData.reverse();
      console.log('data2: ');
      console.log(this.elementData);
      this.pageSlice = this.elementData.slice(0, 4);
    })
  }

  goBack() {
    this.router.navigate(['/main-page']);
  }

  openDialog() {
    this.dialog.open(ChatDialogComponent, {
      width: '600px'
    });
  }

}
