import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
    this.selectedServices = event.value; // Use event.value to get an array of selected values
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
}
