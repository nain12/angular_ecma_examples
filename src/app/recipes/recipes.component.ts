import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeElement: Recipe;
  constructor() { }

  ngOnInit() {
  }

  receiveRecipeFromList(recipe: Recipe) {
    console.log('In recipes component', recipe);
    this.recipeElement = recipe;
  }
}
