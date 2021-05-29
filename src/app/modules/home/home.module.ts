import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

const ROUTER = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ROUTER
  ]
})
export class HomeModule { }
