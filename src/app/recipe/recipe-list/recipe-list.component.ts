import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Omelette ', 'Cooking up eggs with cheese and tomato makes for a super-quick meal for one that\'s ready in 10 minutes',
    'https://x9wsr1khhgk5pxnq1f1r8kye-wpengine.netdna-ssl.com/wp-content/uploads/basic-french-omelet-930x550.jpg'),
    new Recipe('Soup','Be bowled over by our nourishing soups. Our warming recipes range from classic minestrone and vibrant tomato soup to blends such as celeriac, hazelnut and truffle.',
    'https://img.taste.com.au/TtwxEpAq/w643-h428-cfill-q90/taste/2016/11/pumpkin-and-chive-soup-75984-1.jpeg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
