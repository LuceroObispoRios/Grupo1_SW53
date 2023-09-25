import { Component, OnInit, ViewChild } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyDataService } from 'src/app/services/company-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

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

  constructor(private companyDataService: CompanyDataService, private router: Router) { 
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

  getRow(row: { id: any; }){
    console.log("Row clicked: ");
    console.log(row);
    this.router.navigateByUrl(`/company/${row.id}`);
  }
}
