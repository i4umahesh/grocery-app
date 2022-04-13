import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';

import { ProductItemComponent } from './modules/components/product-item/product-item.component';
import { ProductListComponent } from './modules/components/product-list/product-list.component';
import { CategoriesItemComponent } from './modules/components/categories-item/categories-item.component';
import { CategoriesListComponent } from './modules/components/categories-list/categories-list.component';
import { CommonModule } from '@angular/common';
import { ProductServicesService } from './services/product-services.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    ProductListComponent,
    CategoriesItemComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ProductsComponent,
    CategoriesItemComponent,
    CategoriesListComponent,
    ProductListComponent
  ],
  providers:[
    ProductServicesService
  ]
})
export class ProductsModule { }
