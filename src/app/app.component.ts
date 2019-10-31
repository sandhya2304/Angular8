import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  optionLoaded = 'recipes';
  recipes: string;
  onNavigation(option: string) {
       this.optionLoaded = option;
  }
}
