import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    const url = `${environment.apiUrlBase}/entradas/`;
    return this.http.get<any>(url);
  }
}
