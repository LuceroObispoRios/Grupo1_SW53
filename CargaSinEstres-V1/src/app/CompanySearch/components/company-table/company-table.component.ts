import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { MatTableDataSource } from '@angular/material/table';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

import {MatDialog, MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';
import { BookingHistory } from 'src/app/models/booking-history.model';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent{

  companyData!: Company; //! significa que se inicializara mas adelante
  dataSource_company = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'services', 'photo'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, public dialog: MatDialog) { 
    this.companyData = {} as Company;
  }

  ngOnInit(): void {
    this.dataSource_company.paginator = this.paginator;
    this.getAllCompanies(); 
  }

  getAllCompanies() {
    this.companyDataService.getAllCompanies().subscribe((res: any) => {
      this.dataSource_company.data = res;
    })
  }

  searchByCompanyName(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_company.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_company.paginator) {
      this.dataSource_company.paginator.firstPage();
    }
  }

  getRow(row: { id: any; }){
    console.log("Row clicked: ");
    console.log(row);
    this.router.navigateByUrl(`/company/${row.id}`);
  }

  openDialog(){
    const dialogRef = this.dialog.open(CargaRapidaDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'cargaRapida-dialog',
  templateUrl: 'cargaRapida-dialog/cargaRapida-dialog.html',
  styleUrls: ['cargaRapida-dialog/cargaRapida-dialog.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule]
})
export class CargaRapidaDialog {

  companies: Company[] = [];

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

  constructor(public dialogRef: MatDialogRef<CargaRapidaDialog>, private companyDataService: CargaSinEstresDataService) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyDataService.getAllCompanies().subscribe((res: any) => {
      this.companies = res;
      console.log(this.companies)
    })
  }

  generateCargaRapida(){
    let now = new Date(); //current date al momento de hacer la reserva

    let randCompanyIndex = Math.floor(Math.random() * this.companies.length); //index al azar
    let randCompany = this.companies[randCompanyIndex]; //company al azar

    //generar reserva a partir de randCompany
    this.reservation.idCompany = randCompany.id;
    this.reservation.hiredCompany.name = randCompany.name;
    this.reservation.hiredCompany.logo = randCompany.photo;
    console.log('name:', randCompany.name);
    this.reservation.pickupAddress = "Locación actual";
    this.reservation.destinationAddress = "Por Definir";
    this.reservation.status = "En curso";
    this.reservation.payment.totalAmount = 0;
    this.reservation.payment.paymentMethod = "Por definir";
    this.reservation.bookingDate = now;
    this.reservation.movingDate = now;
    //se genera la reserva con company random y fecha actual
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

}
