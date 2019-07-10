import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recipes: Recepie[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //this.recipeSelectedEvent.emit(this.recipes[0]);
    this.recipes = this.recipeService.getRecipes()
  }

}
