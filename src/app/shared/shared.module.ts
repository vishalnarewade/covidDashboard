import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';

@NgModule({
  declarations: [OrderByPipe, NumberWithCommasPipe],
  imports: [
    CommonModule
  ],
  exports: [OrderByPipe, NumberWithCommasPipe],
})
export class SharedModule { }
