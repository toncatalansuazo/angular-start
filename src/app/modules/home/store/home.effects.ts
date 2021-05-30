import { Product } from './../../../models/product';
import { ProductService } from './../../../core/http/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as HomeActions from './home.actions';



@Injectable()
export class HomeEffects {

  loadHomes$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeActions.loadHomes),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => HomeActions.loadHomesSuccess({ data })),
          catchError(error => of(HomeActions.loadHomesFailure({ error }))))
      )
    );
  });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(HomeActions.loadProducts),
      switchMap(() =>
        this.productService.loadProducts().pipe(
          map((products: Product[]) => HomeActions.loadProductsSuccess({ products })),
          catchError(error => of(HomeActions.loadProductsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
    private productService: ProductService) {}

}
