import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './ui/template/template.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SalePricePipe } from './pipes/sale-price.pipe';



@NgModule({
  declarations: [
    TemplateComponent,
    ProductListComponent,
    ProductDetailComponent,
    SalePricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateComponent,
    ProductListComponent,
    SalePricePipe
  ]
})
export class SharedModule { }
