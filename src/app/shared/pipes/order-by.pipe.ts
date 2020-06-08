import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(array: any, field: any, orderType: any): any {
    if (!Array.isArray(array)) return;

    return array.sort((a, b) => +orderType
      ? (b[field] - a[field])
      : (a[field] - b[field])
      );
  }

}
