import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListSerice } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  @Input() recipe: Recepie
  constructor(private shoppingListService: ShoppingListSerice) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList(){
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }
}
