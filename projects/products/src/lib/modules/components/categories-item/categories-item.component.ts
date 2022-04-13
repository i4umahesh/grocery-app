import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {

  categoriesList = [
    "Fruits" ,
    "Vegetables",
    "Diary"

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
