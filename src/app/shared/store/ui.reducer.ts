import { Action, createReducer, on } from '@ngrx/store';
import { startLoading, stopLoading } from './ui.actions';


export const uiFeatureKey = 'ui';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};


export const reducer = createReducer(
  initialState,
  on(startLoading, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(stopLoading, (state, action) => {
    return {
      ...state,
      loading: false
    }
  })
);

