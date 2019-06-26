import {Category} from './category';
import {Market} from './market';
import {FoodType} from './foodType';
import {Food} from './food';

export class TestData {
    static categories: Category[] = [
        new Category(0, 'Все'),
        new Category(1, 'Рыба'),
        new Category(2, 'Мясо'),
        new Category(3, 'Овощи'),
        new Category(4, 'Фрукты'),
        new Category(5, 'Напитки')
    ];

    static markets: Market[] = [
        new Market(0, 'Даниловский', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', 4.12324, 5.234234, 9.8, 5),
        new Market(1, 'Драгомиловский', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', 37.553748, 55.743219, 9.8, 4),
        new Market(2, 'Восточный', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', 4.12324, 5.234234, 9.8, 3),
        new Market(3, 'Западный', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', 4.12324, 5.234234, 9.8, 2),
    ];

    static foodTypes: FoodType[] = [
        new FoodType(0, TestData.categories[1], 'Кижуч'),
        new FoodType(1, TestData.categories[1], 'Кета'),
        new FoodType(2, TestData.categories[2], 'Говядина'),
        new FoodType(3, TestData.categories[2], 'Телятина'),
    ];

    static generateFood() {
        const food: Array<Food> = [];
        let id = 0;
        for (const market of TestData.markets) {
            for (const foodType of TestData.foodTypes) {
                food.push(new Food(id++, foodType, market, Math.random() * 10, Math.floor(Math.random() * 1000)));
            }
        }
        return food;
    }
}
