import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-site';
  selectedComponent:string = 'recipe'

  selectComponent(component: string) {
    this.selectedComponent = component
  }
}
