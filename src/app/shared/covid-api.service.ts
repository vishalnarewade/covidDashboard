import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  link = 'https://api.covid19india.org/data.json';
  confirmLink = `${this.link}/status/confirmed`;
  startDate = '2020-05-04T00:00:00Z';
  currentTime = new Date(new Date().setHours(0, 0, 0, 0)).toISOString();
  apiLink = '';

  constructor(  
    private http: HttpClient
  ) {
    this.apiLink = `${this.link}?from=${this.startDate}&to=${this.currentTime}`;
  }

  public getList(): Observable<any> {
    return this.http.get(`https://api.covid19india.org/data.json`);
  }
}
