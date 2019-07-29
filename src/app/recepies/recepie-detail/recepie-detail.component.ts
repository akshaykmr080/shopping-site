import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListSerice } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  recipe: Recepie;
  id: number;
  constructor(private route: ActivatedRoute,
              private shoppingListService: ShoppingListSerice,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  addIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
