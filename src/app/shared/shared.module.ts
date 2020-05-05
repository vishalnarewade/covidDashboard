import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyValuePipe } from './key-value.pipe';

@NgModule({
  declarations: [KeyValuePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
