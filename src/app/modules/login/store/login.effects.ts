import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { fromLoginActions } from './index';

@Injectable()
export class LoginEffects {

  loadLogins$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(fromLoginActions.login),
      concatMap(() =>
        this.auth.login().pipe(
          map(data => fromLoginActions.loginSuccess({ data })),
          catchError(error => of(fromLoginActions.loginFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private auth: AuthService
  ) {}

}
