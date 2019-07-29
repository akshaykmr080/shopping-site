import { Recepie } from './recepie.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {

    private recipes: Recepie[] = [
        new Recepie(1, 'Chicken Tandoori',
        'Spicy, tasty tandoori chicken',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg?resize=480:*',
        [new Ingredient('Chicken', 1), new Ingredient('French fries', 20)]),

        new Recepie(2, 'Mango Lassi', 'Lipsmacking mango treat',
        'https://www.simplyrecipes.com/wp-content/uploads/2006/11/mango-lassi-vertical-a-1200.jpg',
        [new Ingredient('Mango', 4), new Ingredient('Sugas', 2)])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id) {
        return this.recipes.find(recipe => recipe.id === id);
    }
};