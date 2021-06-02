import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Ingredient, Product } from './../../models/product';
import { ConfigurationEndpoint } from './../../configuration/configuration-endpoint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productsMock } from "./product-mock-reponse.spec";



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
