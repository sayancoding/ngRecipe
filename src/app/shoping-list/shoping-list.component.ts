import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients:Ingredient[] =[
    new Ingredient('Beacon',20),
    new Ingredient('cheese',10),
  ]
  constructor() { }

  ngOnInit() {
  }
  // adding(Ingre:Ingredient)
  // {
  //   console.log(Ingre)
  //   this.ingredients.push(Ingre)
  // }
  onIngredientAdded(Ingredient:Ingredient)
  {
    this.ingredients.push(Ingredient)
  }

}
