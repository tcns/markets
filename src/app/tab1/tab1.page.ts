import { Component } from '@angular/core';
import {CatalogService} from '../services/catalog/catalog.service';
import {Category} from '../core/category';
import {Market} from '../core/market';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
