import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

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
    ROUTER
  ]
})
export class LoginModule { }
