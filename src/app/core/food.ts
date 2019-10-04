import {FoodType} from './foodType';
import {Market} from './market';
import Parse from 'parse';

export class Food {
    public id: string;
    public foodType: FoodType;
    public market: Market;
    public rate: number;
    public price: number;

    constructor(id: string, foodType: FoodType, market: Market, rate: number, price: number) {
        this.id = id;
        this.foodType = foodType;
        this.market = market;
        this.rate = rate;
        this.price = price;
    }

    static fromParse(obj: any): Food {
        return new Food(obj.id, FoodType.fromParse(obj.get('foodType')), Market.fromParse(obj.get('market')), obj.get('rate'),
            obj.get('price'));
    }

    static getParseObject() {
        return Parse.Object.extend('Food');
    }

    static getParseObjectRel(id: string) {
        const parse = this.getParseObject();
        const obj = new parse();
        obj.id = id;
        return obj;
    }
}
