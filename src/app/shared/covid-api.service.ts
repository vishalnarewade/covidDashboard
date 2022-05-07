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
    vaccinated1: 'success',
    recovered: 'primary',
    vaccinated2: 'info',
  };
  statesName = {
      "AN":"Andaman and Nicobar Islands",
      "AP":"Andhra Pradesh",
      "AR":"Arunachal Pradesh",
      "AS":"Assam",
      "BR":"Bihar",
      "CH":"Chhattisgarh",
      "DN":"Dadra and Nagar Haveli",
      "DL":"Delhi",
      "GA":"Goa",
      "GJ":"Gujarat",
      "HR":"Haryana",
      "HP":"Himachal Pradesh",
      "JK":"Jammu and Kashmir",
      "JH":"Jharkhand",
      "KA":"Karnataka",
      "KL":"Kerala",
      "LA":"Ladakh",
      "LD":"Lakshadweep",
      "MH":"Maharashtra",
      "MN":"Manipur",
      "ML":"Meghalaya",
      "MZ":"Mizoram",
      "NL":"Nagaland",
      "OR":"Odisha",
      "PY":"Puducherry",
      "PB":"Punjab",
      "RJ":"Rajasthan",
      "SK":"Sikkim",
      "TN":"Tamil Nadu",
      "TG":"Telangana",
      "TR":"Tripura",
      "UP":"Uttar Pradesh",
      "WB":"West Bengal"
  }

  constructor(  
    private http: HttpClient
  ) {}

  public getAllIndiaList(): Observable<any> {
    return this.http.get(`https://data.covid19india.org/v4/min/data.min.json`);
  }

  public getIndiaStateList(): Observable<any> {
    return this.http.get('https://api.covid19india.org/state_district_wise.json');
  }

  public getAllCountrylist(): Observable<any> {
    return this.http.get('https://api.covid19api.com/summary');
  }
}
