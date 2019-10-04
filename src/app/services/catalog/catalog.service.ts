import {Injectable} from '@angular/core';
import {Category} from '../../core/category';
import {Market} from '../../core/market';
import {Utils} from '../../core/utils';
import {Food} from '../../core/food';
import {FoodType} from '../../core/foodType';
import Parse from 'parse';

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
    }

    getCategories(callback: (results: Array<Category>) => void) {
        if (this.categories != null) {
            callback(this.categories);
        }
        const pO = Category.getParseObject();
        const query = new Parse.Query(pO);
        query.find().then((results) => {
            this.categories = results.map(Category.fromParse);
            callback(this.categories);
        }, (error) => {
            console.error('Error while fetching Category', error);
        });
    }

    getMarkets() {
        console.log('getting markets');
        return Utils.pickRandom(this.markets, 3, 3);
    }

    getFoodsByType(type: FoodType) {
        return this.foodsGroups.get(type);
    }

    getFoodTypes(catId: string, callback: (results: Array<FoodType>) => void) {
        if (this.foodTypes != null) {
            callback(this.foodTypes);
        }
        const food = FoodType.getParseObject();
        const query = new Parse.Query(food);
        query.equalTo('category', Category.getParseObjectRel(catId));
        query.find().then((results) => {
            this.foodTypes = results.map(FoodType.fromParse);
            callback(this.foodTypes);
        }, (error) => {
            console.error('Error while fetching Foods', error);
        });
    }

    getFoods(catId: string, callback: (results: Array<Food>) => void) {
        if (this.foods != null) {
            callback(this.foods);
        }
        console.log('GETTING FOODS BY CATEGORY ' + catId);
        const food = Parse.Object.extend('Food');
        const query = new Parse.Query(food);
        this.getFoodTypes(catId, types => {
            console.log('GOT TYPES FOODS');
            console.log(types);
            query.containedIn('foodType', types.map(a => FoodType.getParseObjectRel(a.id)));
            query.descending('rate');
            query.find().then((results) => {
                this.foods = results.map(Food.fromParse);
                callback(this.foods);
            }, (error) => {
                console.error('Error while fetching Foods', error);
            });
        });
    }
}
