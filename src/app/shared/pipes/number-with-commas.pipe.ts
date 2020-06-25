import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithCommas'
})
export class NumberWithCommasPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
