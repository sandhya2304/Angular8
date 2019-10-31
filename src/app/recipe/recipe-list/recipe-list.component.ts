import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   recipes: Recipe[] = [
     // tslint:disable-next-line:max-line-length
     new Recipe('vegetarian', 'this is descrition of vegetraian dish..', 'https://cdn.vox-cdn.com/thumbor/r2l-BAvQA9d5yuiuxPFIW95HMGM=/0x80:2039x1609/920x613/filters:focal(0x80:2039x1609):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/35120246/153128646.0.jpg'),
     new Recipe('vegetarian with cheese', 'this is descrition of vegetraian dish..', 'https://cdn.vox-cdn.com/thumbor/r2l-BAvQA9d5yuiuxPFIW95HMGM=/0x80:2039x1609/920x613/filters:focal(0x80:2039x1609):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/35120246/153128646.0.jpg'),
     new Recipe('vegetarian with cheese', 'this is descrition of vegetraian dish..', 'https://cdn.vox-cdn.com/thumbor/r2l-BAvQA9d5yuiuxPFIW95HMGM=/0x80:2039x1609/920x613/filters:focal(0x80:2039x1609):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/35120246/153128646.0.jpg'),
     new Recipe('vegetarian with cheese', 'this is descrition of vegetraian dish..', 'https://cdn.vox-cdn.com/thumbor/r2l-BAvQA9d5yuiuxPFIW95HMGM=/0x80:2039x1609/920x613/filters:focal(0x80:2039x1609):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/35120246/153128646.0.jpg')

   ];


  constructor() { }

  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }
  onrecipeSelected(recipe: Recipe) {
      this.theRecipe.emit(recipe);
  }

}
