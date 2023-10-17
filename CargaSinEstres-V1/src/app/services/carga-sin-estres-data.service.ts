import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { BookingHistory } from '../models/booking-history.model';
import { Subscription } from '../models/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class CargaSinEstresDataService {
  base_url = environment.baseURL;

  constructor( private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`Ocurrió un error: ${error.status}, el cuerpo fue: ${error.error}`);
    }
    else {
      console.log(`El servidor respondió con el código ${error.status}, el cuerpo fue: ${error.error}`);
    }
    return throwError('Ha ocurrido un problema con la solicitud, por favor inténtalo de nuevo más tarde');
  }

  getAllCompanies(): Observable<any> {
    return this.http.get<any>(this.base_url+"/"+"companies").pipe(retry(2),catchError(this.handleError));
  }

  getCompanyById(id: any): Observable<any> {
    return this.http.get<any>(this.base_url+"/"+"companies").pipe(retry(2),catchError(this.handleError));
  }

  createReservation(item: any): Observable<BookingHistory>{
    return this.http.post<BookingHistory>(this.base_url+"/"+"bookingHistory", JSON.stringify(item), this.httpOptions).pipe(retry(2),catchError(this.handleError));
  }

  // booking history
  getBookingHistoryById(clientId: any): Observable<BookingHistory> {
    return this.http.get<BookingHistory>(`${this.base_url}/bookingHistory?idClient=${clientId}`)
      .pipe(retry(2),catchError(this.handleError))
  }

  getBookingHistoryByCompanyId(companyId: any): Observable<BookingHistory> {
    return this.http.get<BookingHistory>(`${this.base_url}/bookingHistory?idCompany=${companyId}`)
      .pipe(retry(2),catchError(this.handleError))
  }

  updateBookingHistoryMessage(id: any, data: any): Observable<BookingHistory> {
    return this.http.put<BookingHistory>(`${this.base_url}/bookingHistory/${id}`, JSON.stringify(data), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError))
  }
  
  //for login
  getClientsForLogin(email: string, password: string): Observable<any> {
    return this.http.get(`${this.base_url}/clients?email=${email}&password=${password}`);
  }

  getCompaniesForLogin(email: string, password: string): Observable<any> {
    return this.http.get(`${this.base_url}/companies?email=${email}&password=${password}`);
  }

  //for registration
  createClient(data: any): Observable<any> {
    return this.http.post(`${this.base_url}/clients`, JSON.stringify(data), this.httpOptions);
  }

  createCompany(data: any): Observable<any> {
    return this.http.post(`${this.base_url}/companies`, JSON.stringify(data), this.httpOptions);
  }

  //for settings
  updateClient(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.base_url}/clients/${id}`, JSON.stringify(data), this.httpOptions);
  }

  updateCompany(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.base_url}/companies/${id}`, JSON.stringify(data), this.httpOptions);
  }

  //get client by id
  getClientById(clientId: any): Observable<any> {
    return this.http.get<any>(`${this.base_url}/clients/${clientId}`).pipe(retry(2),catchError(this.handleError));
  }

  createSubscription(subscriptionData: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.base_url}/subscriptions`, subscriptionData, this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

}
