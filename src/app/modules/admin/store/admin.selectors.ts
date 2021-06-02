import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmin from './admin.reducer';

export const selectAdminState = createFeatureSelector<fromAdmin.State>(
  fromAdmin.adminFeatureKey
);

export const getCurrentProduct = createSelector(selectAdminState, state => state.currentProduct);
export const getProducts = createSelector(selectAdminState, state => state.products);
