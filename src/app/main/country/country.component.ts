import { Component, OnInit } from '@angular/core';
import { CovidApiService } from 'src/app/shared/covid-api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})

export class CountryComponent implements OnInit {
  list = {
    confirmed: { 
      total: 0,
      new: 0
    },
    recovered: { 
      total: 0,
      new: 0
    },
    deaths: { 
      total: 0,
      new: 0
    },
  };

  data = [];
  tableData = [];

  constructor(
    public apiService: CovidApiService,
  ) {
    this.data = this.apiService.objectKeys(this.list)
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getAllCountrylist()
    .subscribe((res) => {
      const { Global, Countries } = res;

      this.tableData = Countries;
      this.list = {
        confirmed: { 
          total: Global.TotalConfirmed,
          new: Global.NewConfirmed
        },
        recovered: { 
          total: Global.TotalRecovered,
          new: Global.NewRecovered
        },
        deaths: { 
          total: Global.TotalDeaths,
          new: Global.NewDeaths
        }
      }
    }, error => alert('something wrong, please refresh after 5 minute'))
  }
}