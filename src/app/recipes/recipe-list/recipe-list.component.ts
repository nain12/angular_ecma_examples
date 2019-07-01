import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'It is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  @Output() recipeFromList = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onSelectRecipe(recipe: Recipe){
    console.log('recipe in list component', recipe);
    this.recipeFromList.emit(recipe);
  }
}
