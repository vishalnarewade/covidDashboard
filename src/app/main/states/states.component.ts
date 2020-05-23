import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CovidApiService } from 'src/app/shared/covid-api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StatesComponent implements OnInit {
  form: FormGroup;
  data: any = [];
  tableData = [];
  statelist = [];

  constructor(
    public apiService: CovidApiService,
    public formBuilder: FormBuilder,
    public router: ActivatedRoute, 
  ) {
    this.form = this.formBuilder.group({
      selected: [''],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiService.getIndiaStateList()
      .subscribe((data) => {
      this.data = this.apiService.objectKeys(data).reduce((acc: any, current: string) => {
        var statecode = data[current].statecode;
        if (!('UN' === statecode)) {
          const list = this.apiService.objectKeys(data[current].districtData).map(x => ({
            state: x, ...data[current].districtData[x],
          }));

          acc.push({
            stateName: current,
            statecode,
            data: list,
          });

          this.statelist.push({ name: current, code: statecode });
        }
        return acc;
      }, []);

      this.form.setValue({
        selected: (this.router.snapshot.paramMap.get('id') || this.data[0].statecode),
      });
      this.changeState(this.form.value.selected);
    }, error => alert('something wrong, please refresh after 5 minute'))
  }

  changeState(code) {
    this.tableData = [];
    const list = this.data.filter(x => x.statecode === code);
    this.tableData = this.tableData.concat(list[0].data);
  }
}
