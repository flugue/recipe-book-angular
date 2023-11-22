import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredientChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Pork', 5),
    new Ingredient('Tamarind', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients = this.ingredients.filter(
      (i) => i != this.ingredients[index]
    );
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
