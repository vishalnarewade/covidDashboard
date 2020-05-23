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
    active: { 
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
      const  { statewise } = data;
      const [ total ] = statewise.splice(0, 1); 
      this.tableData = statewise;

      this.apiService.objectKeys(total).forEach(x => {
        if (this.data.includes(x)) this.list[x] = Object.assign({}, {
          total: total[x],
          new: total[`delta${x}`]
        });
      });
    }, error => alert('something wrong, please refresh after 5 minute'))
  }

  redirectToRegion(code) {
    this.router.navigate(['//main/regions', { id: code }]);
  }
}
