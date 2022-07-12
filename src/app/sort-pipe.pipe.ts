import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class SortPipe implements PipeTransform {
  transform(array: any[], sortBy: string, order?: string): any[] {
    const sortOrder = order ? order : 'asc'; // setting default ascending order

    return orderBy(array, [sortBy], [sortOrder]);
  }

  // orderBy(arr: any[], sortBy: [string], order?: [string]): any[] {
  //   arr.sort((a, b) => {
  //     return b - a;
  //   });
  // }
}
