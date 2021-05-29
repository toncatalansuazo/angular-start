import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { fromUiActions } from './index';



@Injectable()
export class UiEffects {
  startLoading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUiActions.startLoading),
      tap((data) => console.log('show loading'))
    );
  });

  stopLoading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUiActions.stopLoading),
      tap((data) => console.log('stop loading'))
    );
  });

  constructor(private actions$: Actions) {}
}
