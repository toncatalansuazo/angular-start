import { createAction, props } from '@ngrx/store';

export const startLoading = createAction(
  '[Ui] Start Loading'
);

export const stopLoading = createAction(
  '[Ui] Stop Loading',
  props<{ data: any }>()
);
