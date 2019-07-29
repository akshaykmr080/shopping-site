import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router,
              private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.recipeSelectedEvent.emit(this.recipes[0]);
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
