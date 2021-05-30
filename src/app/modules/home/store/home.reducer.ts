import { Product } from './../../../models/product';
import { Action, createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';

export const homeFeatureKey = 'home';

export interface State {
  products: Product[];

}

export const initialState: State = {
  products: []
};


export const reducer = createReducer(
  initialState,

  on(HomeActions.loadHomes, state => state),
  on(HomeActions.loadProductsSuccess, (state, action) => ({
    ...state,
    products: [...state.products, ...action.products]
  })),
  on(HomeActions.loadProductsFailure, (state, action) => ({
    ...state,
    products: []
  })),
);

