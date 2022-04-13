import { Component, OnInit } from '@angular/core';
import * as products from "../../../../../../files/products.json"

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  ListOfProducts:any[] = [ ]
  constructor(  ) { }

  ngOnInit(): void {
    //this.productService.getJson().subscribe(res => console.log(res))
    this.ListOfProducts = (products as any).default
  }

}
