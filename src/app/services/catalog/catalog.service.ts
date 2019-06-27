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
  foodsGroups: Map<FoodType, Food[]>;
  constructor() {
    this.categories = TestData.categories;
    this.markets = TestData.markets;
    this.foodTypes = TestData.foodTypes;
    this.foods = TestData.generateFood();
    this.foodsGroups = Utils.groupBy(this.foods, s => s.foodType);
  }

  getCategories() {
    return this.categories;
  }

  getMarkets() {
    console.log('getting markets');
    return Utils.pickRandom(this.markets, 3, 3);
  }

  getFoodsByType(type: FoodType) {
    return this.foodsGroups.get(type);
  }

  getFoods(catId: number) {
    const ans = [];
    this.foodsGroups.forEach((value, key) => {
      if (catId === 0 || key.category.id === catId) {
        value = value.sort((a, b) => b.rate - a.rate);
        ans.push(value[0]);
      }
    });
    return ans.sort((a, b) => b.rate - a.rate);
  }
}
