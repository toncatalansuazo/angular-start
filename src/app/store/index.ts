import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUi from '../shared/store/ui.reducer';
import * as fromHome from '../modules/home/store/home.reducer';
import * as fromLogin from '../modules/login/store/login.reducer';


export interface AppState {

  [fromUi.uiFeatureKey]: fromUi.State;
  [fromHome.homeFeatureKey]: fromHome.State;
  [fromLogin.loginFeatureKey]: fromLogin.State;
  [fromLogin.loginFeatureKey]: fromLogin.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromUi.uiFeatureKey]: fromUi.reducer,
  [fromHome.homeFeatureKey]: fromHome.reducer,
  [fromLogin.loginFeatureKey]: fromLogin.reducer,
  [fromLogin.loginFeatureKey]: fromLogin.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
