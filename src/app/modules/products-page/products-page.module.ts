import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductsModule } from '@products/products';


@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    ProductsModule
  ]
})
export class ProductsPageModule { }
