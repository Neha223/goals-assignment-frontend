import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { throwError } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  signup(data: any) {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post(this.url + '/signup', data)
    .pipe(catchError(error => throwError(error)));
  }
  getData(status:string) {
    const param = new HttpParams().set('status', status);
    return this.http.get<any>(this.url + '/records', {params: param})
    .pipe(catchError(error => throwError(error)));
  }
  changeStatus(data:any) {
    return this.http.post<any>(this.url + '/changestatus', data)
    .pipe(catchError(error => throwError(error)));
  }
  searchData(data) {
    return this.http.post<any>(this.url + '/search', data)
    .pipe(catchError(error => throwError(error)));
  }
  checkPhone(phone) {
    const param = new HttpParams().set('phone', phone);
    return this.http.get<any>(this.url + '/checkphone', {params: param})
    .pipe(catchError(error => throwError(error)));
  }
  checkEmail(email) {
    const param = new HttpParams().set('email', email);
    return this.http.get<any>(this.url + '/checkemail', {params: param})
    .pipe(catchError(error => throwError(error)));
  }
}
