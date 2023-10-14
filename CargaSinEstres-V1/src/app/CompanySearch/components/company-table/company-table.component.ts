import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';
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

  companyData!: Company; //! significa que se inicializara mas adelante
  dataSource_company = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'services', 'photo'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  userId: string = '';
  constructor(private companyDataService: CargaSinEstresDataService, private router: Router, private route: ActivatedRoute) { 
    this.companyData = {} as Company;

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
    this.router.navigateByUrl(`client/${this.userId}/company/${row.id}`);
  }
}
