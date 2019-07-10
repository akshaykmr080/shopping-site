import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { ShoppingListSerice } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', {static: true}) name: ElementRef;
  @ViewChild('amount', {static: true}) amount: ElementRef;

  constructor(private shoppingListService: ShoppingListSerice) { }

  ngOnInit() {
  }

  onAddItem() {
    this.shoppingListService.addIngredient({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value})
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
