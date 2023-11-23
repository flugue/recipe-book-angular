import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onClickEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onClickDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id!);
    this.router.navigate([''], { relativeTo: this.route });
  }

  onClickToShoppingList(){
    this.shoppingListService.bulkAddIngredients(this.recipe?.ingredients!);
  }
}
