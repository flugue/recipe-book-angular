import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pork Adobo', 'Adobo recipe', 'https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo--500x375.jpg'),
    new Recipe('Sinigang', 'Pork Sinigang recipe', 'https://panlasangpinoy.com/wp-content/uploads/2021/08/Killer-Pork-Sinigang.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
