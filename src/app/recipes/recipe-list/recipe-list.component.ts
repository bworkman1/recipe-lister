import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('BBQ Chicken Pizza', 'This is a recipe for classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.' +
      ' Gouda cheese gives the homemade pizza the most delicious smoky flavor and cilantro adds a touch of freshness.',
      'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2014/03/Homemade-BBQ-Chicken-Pizza-2.jpg'),
    new Recipe('BBQ Chicken Pizza', 'This is a recipe for classic BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion.' +
      ' Gouda cheese gives the homemade pizza the most delicious smoky flavor and cilantro adds a touch of freshness.',
      'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2014/03/Homemade-BBQ-Chicken-Pizza-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
