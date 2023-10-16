import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  dataSource_company = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'services', 'location', 'photo'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  originalData: any[] = []; //contiene todas las empresas sin ningún filtro aplicado

  userId: string = '';
  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, private route: ActivatedRoute) { 

    // Obtiene el id del usuario
    this.route.pathFromRoot[1].url.subscribe(
      url => {
        console.log('url: ', url);
        this.userId = url[1].path;
        console.log('User id:' + this.userId);
      }
    ); 

  }

  ngOnInit(): void {
    this.getUserDistrict();
    this.dataSource_company.paginator = this.paginator;
    this.getAllCompanies(); 
  }

  getAllCompanies() {
    this.companyDataService.getAllCompanies().subscribe((res: any) => {
      this.originalData = res;
      this.dataSource_company.data = res;
      this.searchBySelectedServices();
      this.searchByLocation();
    })
  }


  /* FILTER: SEARCH BY NAME */
  manualCompanyName: string = ''; // Nombre de la empresa ingresado por el usuario

  searchByCompanyName(){
    this.dataSource_company.data = this.originalData.filter((company) => {
      return company.name.toLowerCase().includes(this.manualCompanyName.toLowerCase());
    });
  }

  /* FILTER: SEARCH BY SERVICES */
  selectedServices: string[] = [];
  servicesList: string[] = ['Transporte', 'Carga', 'Embalaje', 'Montaje', 'Desmontaje'];
  

  searchBySelectedServices() {
    const filterValue = this.dataSource_company.filter; // Almacena el valor actual del filtro
    this.dataSource_company.data = this.originalData.filter((company) => {
      if (this.selectedServices.length > 0) { // Si se han seleccionado servicios
        return this.selectedServices.every((selectedService) => {
          const serviceProperty = selectedService.toLowerCase() as keyof any;
          return company[serviceProperty] === true; //Si el servicio en la empresa es true, entonces se devuelve la empresa
        });
      } else {
        return true;
      }
    });

    this.dataSource_company.filter = filterValue; //se restaura el valor del filtro para que se aplique el filtro de nombre
  }
  
  onServiceSelectionChange(event: any) {
    this.selectedServices = event.value; // Usa event.value para obtener un arreglo de los servicios seleccionados
    this.searchBySelectedServices(); 
  }


  /* FILTER: SEARCH BY LOCATION */
  searchMethod: string = 'noFilter'; // Opción predeterminada
  manualLocation: string = ''; // Ubicación manual ingresada por el usuario
  userLocation: string = ''; // Ubicación del usuario

  getUserDistrict() {
    this.companyDataService.getClientById(this.userId).subscribe(
      (client) => {
        this.userLocation = client.direccion;
        console.log("Distrito del usuario:", this.userLocation);
      },
      (error) => {
        console.error('Error al obtener el distrito del cliente:', error);
      }
    );
  }

  searchByLocation() {
    if (this.searchMethod === 'userLocation') {
      this.dataSource_company.data = this.originalData.filter((company) => {
        return company.direccion.toLowerCase().includes(this.userLocation.toLowerCase());
      });
    } else if (this.searchMethod === 'manualLocation') {
      this.dataSource_company.data = this.originalData.filter((company) => {
        return company.direccion.toLowerCase().includes(this.manualLocation.toLowerCase());
      });
    } else {
      // Si se selecciona "Sin filtro", no se aplica ningún filtro
      this.dataSource_company.data = this.originalData;
      this.searchMethod='';
    }
  }

  /* GO TO COMPANY INFO PAGE */
  getRow(row: { id: any; }){
    console.log("Row clicked: ");
    console.log(row);
    this.router.navigateByUrl(`client/${this.userId}/company/${row.id}`);
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
