import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CargaSinEstresDataService } from 'src/app/services/carga-sin-estres-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent{

  dataSource_company = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'services', 'photo'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  selectedServices: string[] = [];
  servicesList: string[] = ['Transporte', 'Carga', 'Embalaje', 'Montaje', 'Desmontaje'];
  originalData: any[] = []; //contiene todas las empresas sin ningún filtro aplicado

  constructor(private companyDataService: CargaSinEstresDataService, private router: Router) { 
  }

  ngOnInit(): void {
    this.dataSource_company.paginator = this.paginator;
    this.getAllCompanies(); 
  }

  getAllCompanies() {
    this.companyDataService.getAllCompanies().subscribe((res: any) => {
      this.originalData = res;
      this.dataSource_company.data = res;
      this.searchBySelectedServices();
    })
  }

  searchByCompanyName(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource_company.filter = filterValue.trim().toLowerCase();

    if (this.dataSource_company.paginator) {
      this.dataSource_company.paginator.firstPage();
    }
  }

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

  getRow(row: { id: any; }){
    console.log("Row clicked: ");
    console.log(row);
    this.router.navigateByUrl(`/company/${row.id}`);
  }
}
