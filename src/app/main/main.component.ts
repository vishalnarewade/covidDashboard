import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CovidApiService } from '../shared/covid-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  list = {
    confirmed: 0,
    active: 0,
    recovered: 0,
    deaths: 0,
  };
  
  data = Object.keys(this.list);
  tableData = [];

  constructor(
    public apiSerive: CovidApiService,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiSerive.getList()
    .subscribe((data) => {
      const  { cases_time_series , statewise, tested } = data;
      const [ total ] = statewise.splice(0, 1); 
      this.tableData = statewise;

      Object.keys(total).forEach(x => {
        if (this.data.includes(x)) this.list[x] = statewise[0][x];
      });

      this.data = Object.entries(this.list).reduce((acc, curr) => {
        acc.push({ type: curr[0], count: curr[1] });
        return acc;
      }, []);
    });
  }
}
