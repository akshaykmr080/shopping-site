import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true
  selectedComponent = 'recipe'
  @Output() selection = new EventEmitter<String>()

  constructor() { }

  ngOnInit() {
  }

  selectComponent(selectedComponent) {
    this.selection.emit(selectedComponent);
  }

}
