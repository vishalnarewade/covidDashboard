import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CovidApiService } from '../../shared/covid-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {
  list = {
    confirmed: {
      total: 0,
      new: 0
    },
    recovered: { 
      total: 0,
      new: 0
    },
    vaccinated1: { 
      total: 0,
      new: 0
    },
    vaccinated2: { 
      total: 0,
      new: 0
    },
  }; 
  
  data = [];
  tableData = [];

  constructor(
    public apiService: CovidApiService,
    public router: Router,
  ) {
    this.data = this.apiService.objectKeys(this.list);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getAllIndiaList()
    .subscribe((data) => {
      this.tableData = Object.keys(this.apiService.statesName).map(x => {
        this.list.confirmed.total += data[x].total.confirmed;
        this.list.confirmed.new += data[x].delta.confirmed ? data[x].delta.confirmed : 0; 
        this.list.recovered.total += data[x].total.recovered;
        this.list.recovered.new += data[x].delta.recovered ? data[x].delta.recovered : 0; 
        this.list.vaccinated1.total += data[x].total.vaccinated1;
        this.list.vaccinated1.new += data[x].delta.vaccinated1 ? data[x].delta.vaccinated1 : 0; 
        this.list.vaccinated2.total += data[x].total.vaccinated2;
        this.list.vaccinated2.new += data[x].delta.vaccinated2 ? data[x].delta.vaccinated2 : 0; 

        return {
          state: this.apiService.statesName[x],
          ...data[x].total
        }
      })
    }, error => alert('something wrong, please refresh after 5 minute'))
  }

  redirectToRegion(code) {
    this.router.navigate(['//main/regions', { id: code }]);
  }
}
