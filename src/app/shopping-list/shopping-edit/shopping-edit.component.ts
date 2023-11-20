import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription | null = null;
  editMode = false;
  editedItemIndex: number | null = null;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value as Ingredient;
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppinglistService.addIngredient(ingredient);
  }
}
