import { getDaysDiff } from './../../utils/date-utils';
import { Product } from './../../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salePrice'
})
export class SalePricePipe implements PipeTransform {

  transform(product: Product): number {
    const productDate: Date = new Date(product.created_at);
    const currentDate: Date = new Date();
    const daysDiff: number = getDaysDiff(productDate, currentDate)
    if (daysDiff === 0) {
      return product.price;
    }
    if (daysDiff === 1) {
      return product.price * 0.8;
    }
    if (daysDiff === 2) {
      return product.price * 0.2;
    }
    throw Error(`product has expired`);
  }

}
