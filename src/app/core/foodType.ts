import {Category} from './category';
import Parse from 'parse';

export class FoodType {
    public id: string;
    public category: Category;
    public name: string;

    constructor(id: string, category: Category, name: string) {
        this.id = id;
        this.category = category;
        this.name = name;
    }

    static fromParse(obj: any): FoodType {
        return new FoodType(obj.id, Category.fromParse(obj.get('category')), obj.get('name'));
    }

    static getParseObject() {
        return Parse.Object.extend('FoodType');
    }

    static getParseObjectRel(id: string) {
        const parse = this.getParseObject();
        const obj = new parse();
        obj.id = id;
        return obj;
    }
}
