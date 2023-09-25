import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './UserManagement/components/client-form/client-form.component';
import { CompanyFormComponent } from './UserManagement/components/company-form/company-form.component';
import { LoginFormComponent } from './UserManagement/components/login-form/login-form.component';
import { ClientSettingsComponent } from './UserManagement/components/client-settings/client-settings.component';
import { CompanySettingsComponent } from './UserManagement/components/company-settings/company-settings.component';
import { CompanyTableComponent } from './CompanySearch/components/company-table/company-table.component';
import { CompanyDetailComponent } from './CompanySearch/components/company-detail/company-detail.component';
import { HistoryCardsComponent } from './BookingHistory/components/history-cards/history-cards.component';

const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent },
  { path: 'company-form', component: CompanyFormComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'client-settings', component: ClientSettingsComponent },
  { path: 'company-settings', component: CompanySettingsComponent },
  { path: 'company', component: CompanyTableComponent }, 
  { path: 'company/:id', component: CompanyDetailComponent }, // PAGINA INFORMACION DE EMPRESAS
  { path: '', redirectTo: '/login-form', pathMatch: 'full'},
  { path: 'booking-history', component: HistoryCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
