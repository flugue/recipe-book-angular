import { EventEmitter } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pork Adobo', 
        'Adobo recipe', 
        'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo--500x375.jpg',
        [
            new Ingredient('Pork', 2),
            new Ingredient('Soy Sauce', 1),
            new Ingredient('Vinegar', 2),
        ]),
        new Recipe('Sinigang', 
        'Pork Sinigang recipe', 
        'https://panlasangpinoy.com/wp-content/uploads/2021/08/Killer-Pork-Sinigang.jpg',
        [
            new Ingredient('Pork', 2),
            new Ingredient('Tamarind', 1),
        ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }
}