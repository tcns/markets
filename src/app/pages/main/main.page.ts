import { Component } from '@angular/core';
import {CatalogService} from '../../services/catalog/catalog.service';
import {Category} from '../../core/category';
import {Market} from '../../core/market';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage {

  categories: Category[];
  markets: Market[];
  currentCategory: number;
  constructor(public catalog: CatalogService) {
    this.categories = catalog.getCategories();
    this.selectCategory(this.categories[0].id);
  }

  selectCategory(id) {
    this.currentCategory = id;
    this.markets = this.catalog.getMarkets(id);
  }

}
