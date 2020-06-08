import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { StatesComponent } from './states/states.component';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';

import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent,
    StatesComponent,
    CountryComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }