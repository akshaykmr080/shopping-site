import { Directive, HostListener, HostBinding, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit{
  @Input() appDropDown:string = 'open';
  @HostBinding('class.open') classes = false;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    //@HostBinding(this.property) isActive = false;
  }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.classes = this.elRef.nativeElement.contains(event.target) ? !this.classes : false;
  }
}
