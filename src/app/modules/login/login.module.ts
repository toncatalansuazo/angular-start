import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login.effects';

const ROUTER = RouterModule.forChild([
  {
    path: '',
    component: LoginComponent
  }
]);

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ROUTER,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }
