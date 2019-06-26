import {Category} from './category';

export class FoodType {
    public id: number;
    public category: Category;
    public name: string;

    constructor(id: number, category: Category, name: string) {
        this.id = id;
        this.category = category;
        this.name = name;
    }
}
