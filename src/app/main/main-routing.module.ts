import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { MainComponent } from './main.component';

const routes: Routes = [{
  path: 'main',
  component: MainComponent,
  children: [{
    path: 'regions',
    component: StatesComponent,
  }, {
    path: 'country',
    component: HomeComponent,
  }, {
    path: 'world',
    component: CountryComponent,
  }, {
    path: '',
    redirectTo: '/country',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
