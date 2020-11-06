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
    return this.http.post(this.url + '/signup', data)
    .pipe(catchError(error => throwError(error)));
  }
  getData(status:string) {
    const param = new HttpParams().set('status', status);
    return this.http.post(this.url + '/records', {params: param})
    .pipe(catchError(error => throwError(error)));
  }
}
