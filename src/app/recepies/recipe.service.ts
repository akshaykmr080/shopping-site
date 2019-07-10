import { Recepie } from './recepie.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {

    private recipes: Recepie[] = [
        new Recepie('A Test Recepie 1', 'test', 
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-920x605.jpg'),
        new Recepie('A Test Recepie 2', 'test', 
        'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/07/Cheap-family-meals-Recipes-under-%C2%A31-per-head-920x605.jpg')
      ]

    recipeSelected = new EventEmitter<Recepie>()
    getRecipes(){
        return this.recipes.slice()
    }
}