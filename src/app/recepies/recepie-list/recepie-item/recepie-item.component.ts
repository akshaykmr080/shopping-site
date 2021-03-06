import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recipe: Recepie;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  // onSelected() {
  //   this.router.navigate([this.recipe.id], {relativeTo: this.route});
  // }
}
