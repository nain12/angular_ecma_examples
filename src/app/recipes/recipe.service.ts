import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from'@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{ 
    constructor(private shoppingListService: ShoppingListService){
    }   
   recipeEmitter = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
        'Tasty Shnitzel', 
        'A super tasty schnitzel - just awesome',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Chicken_schnitzel_and_chips_with_jaeger_gravy.jpg/800px-Chicken_schnitzel_and_chips_with_jaeger_gravy.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('Big Fat Burger', 
        'What else you need to say?', 
        'https://get.pxhere.com/photo/burger-vegetarian-food-dish-hamburger-cuisine-ingredient-breakfast-sandwich-veggie-burger-slider-fast-food-junk-food-produce-sandwich-finger-food-salmon-burger-buffalo-burger-Burger-king-premium-burgers-bun-recipe-cheeseburger-blt-meat-american-food-comfort-food-baked-goods-appetizer-fried-food-Original-chicken-sandwich-patty-1586555.jpg',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',1)
        ])
      ]; 

      getRecipes(){
          return this.recipes.slice();
      }

      onAddtoShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}