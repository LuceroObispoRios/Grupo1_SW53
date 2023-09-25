import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//COMPONENTS
import { ClientFormComponent } from './UserManagement/components/client-form/client-form.component';
import { CompanyFormComponent } from './UserManagement/components/company-form/company-form.component';
import { LoginFormComponent } from './UserManagement/components/login-form/login-form.component';
import { ClientSettingsComponent } from './UserManagement/components/client-settings/client-settings.component';
import { CompanySettingsComponent } from './UserManagement/components/company-settings/company-settings.component';
import { CompanyDetailComponent } from './CompanySearch/components/company-detail/company-detail.component';
import { CompanyTableComponent } from './CompanySearch/components/company-table/company-table.component';

//OTROS
import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HistoryCardsComponent } from './BookingHistory/components/history-cards/history-cards.component';
import { ChatDialogComponent } from './BookingHistory/components/chat-dialog/chat-dialog.component';
import { PaymentFormComponent } from './Memberships/components/payment-form/payment-form.component';
import { MembershipComponent } from './Memberships/components/membership/membership.component';
import { LandingPageComponent } from './Public/components/landing-page/landing-page.component';
import { FooterComponent } from './Public/components/footer/footer.component';
import { ToolbarLandingComponent } from './Public/components/toolbar-landing/toolbar-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    CompanyFormComponent,
    LoginFormComponent,
    ClientSettingsComponent,
    CompanySettingsComponent,
    CompanyDetailComponent,
    CompanyTableComponent,
    HistoryCardsComponent,
    ChatDialogComponent,
    PaymentFormComponent,
    MembershipComponent,
    LandingPageComponent,
    FooterComponent,
    ToolbarLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
