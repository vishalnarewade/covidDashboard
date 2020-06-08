import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyValuePipe } from './pipes/key-value.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [KeyValuePipe, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [OrderByPipe],
})
export class SharedModule { }
