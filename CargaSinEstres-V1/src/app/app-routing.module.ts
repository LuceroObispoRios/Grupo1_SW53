import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './UserManagement/components/login-form/login-form.component';
import { LandingPageComponent } from './Public/components/landing-page/landing-page.component';
import { ClientFormComponent } from './UserManagement/components/client-form/client-form.component';
import { CompanyFormComponent } from './UserManagement/components/company-form/company-form.component';
import { HistoryCardsComponent } from './BookingHistory/components/history-cards/history-cards.component';
import { CompanyTableComponent } from './CompanySearch/components/company-table/company-table.component';
import { CompanyDetailComponent } from './CompanySearch/components/company-detail/company-detail.component';
import { ClientSettingsComponent } from './UserManagement/components/client-settings/client-settings.component';
import { CompanySettingsComponent } from './UserManagement/components/company-settings/company-settings.component';
import { MembershipComponent } from './Memberships/components/membership/membership.component';
import { PaymentFormComponent } from './Memberships/components/payment-form/payment-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'client-form', component: ClientFormComponent},
  {path: 'company-form', component: CompanyFormComponent},
  {path: 'history-cards', component: HistoryCardsComponent},
  {path: 'company-table', component: CompanyTableComponent},
  {path: 'company/:id', component: CompanyDetailComponent},
  {path: 'client-settings/:id', component: ClientSettingsComponent},
  {path: 'company-settings/:id', component: CompanySettingsComponent},
  {path: 'membership', component: MembershipComponent},
  {path: 'payment-form', component: PaymentFormComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
