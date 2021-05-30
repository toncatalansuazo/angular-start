import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from './../../models/product';
import { ConfigurationEndpoint } from './../../configuration/configuration-endpoint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

var oneDay = new Date();
oneDay.setDate(oneDay.getDate() - 1);
var twoDays = new Date();
twoDays.setDate(twoDays.getDate() - 2);
var threeDays = new Date();
threeDays.setDate(threeDays.getDate() - 3);
const productsMock: Product[] = [
  { name: 'product ', price: 100, created_at: new Date().getTime(), expired: false },
  { name: `product1 one day ${oneDay.getDate()}` , price: 100, created_at: oneDay.getTime(), expired: false },
  { name: `product2 two day ${twoDays.getDate()}`, price: 100, created_at: twoDays.getTime(), expired: false },
  { name: `product3 three day ${threeDays.getDate()}`, price: 100, created_at: threeDays.getTime(), expired: false },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  loadProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(ConfigurationEndpoint.getProductsEndpoint());
    return of(productsMock);
  }

  constructor(private http: HttpClient) {}
}
