import { Component, OnInit } from '@angular/core';
import {Market} from '../../core/market';
import {Utils} from '../../core/utils';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {CatalogService} from '../../services/catalog/catalog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.page.html',
  styleUrls: ['./market-list.page.scss'],
})
export class MarketListPage implements OnInit {

  markets: Market[];
  createRange = Utils.createRange;
  distance = Utils.distance;
  constructor(private geolocation: Geolocation, public catalog: CatalogService,
              private router: Router) {
    this.loadMarketList();
  }

  loadMarketList() {
    const markets = this.catalog.getMarkets();
    this.markets = markets;
    this.geolocation.getCurrentPosition().then(data => {
      const lat1 = data.coords.latitude;
      const long1 = data.coords.longitude;
      markets.forEach(market => {
        market.distance = Utils.getDistanceFromLatLonInKm(lat1, long1, market.latitude, market.longitude);
      });
      this.markets = markets;
    });
  }

  ngOnInit() {
  }

}
