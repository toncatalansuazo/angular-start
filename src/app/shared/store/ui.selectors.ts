import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uiFeatureKey } from './ui.reducer';
import { fromUi, fromUiSelectors } from './index';

const uiFeature = createFeatureSelector<fromUi.State>(uiFeatureKey);
export const isLoading = createSelector(uiFeature, (state: fromUi.State) => state.loading);