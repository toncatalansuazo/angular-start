import { Product } from 'src/app/models/product';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Admin] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Admin] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Admin] Load Products Failure',
  props<{ error: any }>()
);
export const setCurrentProduct = createAction(
  '[Admin] Set Current Product',
  props<{ product: Product }>()
);

