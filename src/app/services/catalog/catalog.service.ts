import { Injectable } from '@angular/core';
import {Category} from '../../core/category';
import {Market} from '../../core/market';
import {Utils} from '../../core/utils';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  categories: Category[];
  markets: Market[];
  constructor() {
    this.categories = [
      new Category(0, 'Все'),
      new Category(1, 'Рыба'),
      new Category(2, 'Мясо'),
      new Category(3, 'Овощи'),
      new Category(4, 'Фрукты'),
      new Category(5, 'Напитки')
    ];

    this.markets = [
      new Market(0, 'Даниловский', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', '4.12324', '5.234234', 9.8),
      new Market(1, 'Драгомиловский', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', '4.12324', '5.234234', 9.8),
      new Market(2, 'Восточный', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', '4.12324', '5.234234', 9.8),
      new Market(3, 'Западный', 'За хорошей рыбой и свежим мясом', 'Москва Советская 51б', '4.12324', '5.234234', 9.8),
    ];
  }

  getCategories() {
    return this.categories;
  }

  getMarkets(categoryId) {
    console.log("getting markets");
    return Utils.pickRandom(this.markets, 3, 3);
  }
}
