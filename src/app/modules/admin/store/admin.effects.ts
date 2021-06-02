import { loadProductsSuccess } from './../../home/store/home.actions';
import { ProductService } from './../../../core/http/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as AdminActions from './admin.actions';



@Injectable()
export class AdminEffects {

  loadAdmins$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AdminActions.loadProducts),
      switchMap(() =>
        this.productService.loadProducts().pipe(
          map(products => AdminActions.loadProductsSuccess({ products })),
          catchError(error => of(AdminActions.loadProductsFailure({ error }))))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

}
