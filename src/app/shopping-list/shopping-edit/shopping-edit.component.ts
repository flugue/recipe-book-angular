import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true})
  nameInput!: ElementRef;

  @ViewChild('amountInput', {static: true})
  amountInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.addEvent.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));
  }

}
