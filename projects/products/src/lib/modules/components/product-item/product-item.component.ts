import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  products;

  constructor() { }

  ngOnInit(): void {
    console.log(this.products);
    
  }

}
