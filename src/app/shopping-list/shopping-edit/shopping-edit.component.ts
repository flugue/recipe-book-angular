import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('f') slForm: NgForm | undefined;
  subscription: Subscription | null = null;
  editMode = false;
  selectedItemIndex: number | null = null;
  editedItem: Ingredient | undefined;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.selectedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slForm?.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value as Ingredient;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppinglistService.updateIngredient(
        this.selectedItemIndex!,
        ingredient
      );
    } else {
      this.shoppinglistService.addIngredient(ingredient);
    }
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.slForm!.reset();
  }

  onDelete(){
    this.shoppinglistService.deleteIngredient(this.selectedItemIndex!);
    this.onClear();
  }
}
