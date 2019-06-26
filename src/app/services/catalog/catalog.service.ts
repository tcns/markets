import { Injectable } from '@angular/core';
import {Category} from '../../core/category';
import {Market} from '../../core/market';
import {Utils} from '../../core/utils';
import {Food} from '../../core/food';
import {FoodType} from '../../core/foodType';
import {TestData} from '../../core/testData';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  categories: Category[];
  markets: Market[];
  foods: Food[];
  foodTypes: FoodType[];
  constructor() {
    this.categories = TestData.categories;
    this.markets = TestData.markets;
    this.foodTypes = TestData.foodTypes;
    this.foods = TestData.generateFood();
  }

  getCategories() {
    return this.categories;
  }

  getMarkets() {
    console.log('getting markets');
    return Utils.pickRandom(this.markets, 3, 3);
  }

  getFoods(catId: number) {
    const fArr = catId === 0 ? this.foods : this.foods.filter(a => a.foodType.category.id === catId);
    return fArr.sort((a, b) => b.rate - a.rate);
  }
}
