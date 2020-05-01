import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = new HttpHeaders();
  options = { headers: this.headers, withCredintials: false };

  constructor(private http: HttpClient) {
    
  }

  post(serviceName: string, data: any) {
    const url = environment.apiUrl + serviceName;
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(url, data, this.options);
  }
}