import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model'
@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Output() recipeSelectedEvent = new EventEmitter<Recepie>();
  recipes: Recepie[] = [
    new Recepie('A Test Recepie 1', 'test', 
    'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-920x605.jpg'),
    new Recepie('A Test Recepie 2', 'test', 
    'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-920x605.jpg')
  ]
  constructor() { }

  ngOnInit() {
    //this.recipeSelectedEvent.emit(this.recipes[0]);
  }

  recipeSelected(recipe: Recepie) {
    this.recipeSelectedEvent.emit(recipe);
  }
}
