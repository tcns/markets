import {Component} from '@angular/core';
import {CatalogService} from '../../services/catalog/catalog.service';
import {Category} from '../../core/category';
import {Food} from '../../core/food';
import {NativePageTransitions} from '@ionic-native/native-page-transitions/ngx';

@Component({
    selector: 'app-main',
    templateUrl: 'main.page.html',
    styleUrls: ['main.page.scss']
})
export class MainPage {

    categories: Category[];
    foods: Food[];
    currentCategory: number;
    subTypeView: boolean;

    constructor(public catalog: CatalogService,
                private nativePageTransitions: NativePageTransitions) {
        catalog.getCategories(categories => {
            this.categories = categories;
            this.selectCategory(this.categories[0].id);
        });
    }

    selectCategory(id) {
        this.currentCategory = id;
        this.catalog.getFoods(id, results => {
            this.foods = results;
            this.subTypeView = false;
        });
    }

    back() {
        this.selectCategory(this.currentCategory);
        this.nativePageTransitions.slide({
            direction: 'right',
            iosdelay: 20
        }).then(() => {

        });
    }

    selectFood(food: Food) {
        if (!this.subTypeView) {
            this.foods = this.catalog.getFoodsByType(food.foodType);
            this.subTypeView = true;
            this.nativePageTransitions.slide({});
        }
    }
}
