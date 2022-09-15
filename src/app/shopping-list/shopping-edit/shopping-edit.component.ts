import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true})
  nameInput!: ElementRef;

  @ViewChild('amountInput', {static: true})
  amountInput!: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.shoppinglistService.addIngredient(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));
  }
}
