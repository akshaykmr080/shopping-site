import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('name', {static: true}) name: ElementRef;
  @ViewChild('amount', {static: true}) amount: ElementRef;
  @Output() addIngredient = new EventEmitter<{name: string, amount:string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.addIngredient.emit({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value})
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
