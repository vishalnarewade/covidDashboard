import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CovidApiService } from 'src/app/shared/covid-api.service';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StatesComponent implements OnInit {
  form: UntypedFormGroup;
  data: any = [];
  tableData = [];
  statelist = [];
  sampleData = {
    district: '',
    confirmed: 0,
    deceased: 0,
    recovered: 0,
    tested: 0,
    vaccinated1: 0,
    vaccinated2: 0
  }

  constructor(
    public apiService: CovidApiService,
    public formBuilder: UntypedFormBuilder,
    public router: ActivatedRoute, 
  ) {
    this.form = this.formBuilder.group({
      selected: [''],
    });
  }

  ngOnInit(): void {
    this.getData();
    this.statelist = Object.entries(this.apiService.statesName);
  }

  getData() {
    this.apiService.getAllIndiaList()
      .subscribe((data) => {
        this.data = this.apiService.objectKeys(data).reduce((acc, x) => {
          var currentDistrict = data[x].districts;

          if (!currentDistrict) return acc;
          var allDistrict = this.apiService.objectKeys(currentDistrict).map(v => {
            var current = currentDistrict[v];

            return {
              ...this.sampleData,
              district: v,
              ...current.total
            };
          });

          return { ...acc, [x]: allDistrict};
        }, {});

        this.form.setValue({
          selected: this.statelist[0][0],
        });
        this.changeState(this.statelist[0][0]);
    }, error => alert('something wrong, please refresh after 5 minute'))
  }

  changeState(code) {
    this.tableData = [];
    this.tableData = this.data[code];
  }
}
