import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import * as fromAdminActions from './admin.actions';

export const adminFeatureKey = 'admin';

export interface State {
  products: Product[];
  currentProduct: Product | undefined;
}

export const initialState: State = {
  products: [],
  currentProduct: undefined,
};

export const reducer = createReducer(
  initialState,
  on(fromAdminActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: action.products
  })),
  on(fromAdminActions.setCurrentProduct, (state, action) => ({
    ...state,
    currentProduct: action.product
  }))
);
