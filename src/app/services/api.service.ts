import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://www.amiiboapi.com/api';

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${url}`);
  }
  post( url: string, data: object ): Observable<any> {
    return this.http.post(`${this.apiUrl}${url}`, data);
  }
}
