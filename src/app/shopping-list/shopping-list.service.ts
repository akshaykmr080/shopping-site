import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListSerice {
    private ingredients: Ingredient[] = [new Ingredient('Apples', 10), new Ingredient('Tomatoes', 15)]

    ingredientAdd = new EventEmitter<Ingredient>();

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientAdd.emit()
    }

    addIngredients(ingredients: Ingredient[]){
        console.log("ingredients added "+ ingredients)
        this.ingredients = [...this.ingredients, ...ingredients]
        this.ingredientAdd.emit()
    }

    getIngredients(){
        return this.ingredients.slice()
    }
}