import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  objectKeys = Object.keys;
  colors = {
    confirmed: 'danger',
    active: 'primary',
    recovered: 'success',
    deaths: 'info',
  };

  constructor(  
    private http: HttpClient
  ) {}

  public getAllIndiaList(): Observable<any> {
    return this.http.get(`https://api.covid19india.org/data.json`);
  }

  public getIndiaStateList(): Observable<any> {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }

  public getAllCountrylist(): Observable<any> {
    return this.http.get('https://api.covid19api.com/summary');
  }
}
