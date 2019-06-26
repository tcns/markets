import {FoodType} from './foodType';
import {Market} from './market';

export class Food {
    public id: number;
    public foodType: FoodType;
    public market: Market;
    public rate: number;
    public price: number;

    constructor(id: number, foodType: FoodType, market: Market, rate: number, price: number) {
        this.id = id;
        this.foodType = foodType;
        this.market = market;
        this.rate = rate;
        this.price = price;
    }
}
