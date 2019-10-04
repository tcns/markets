import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    Parse.serverURL = 'https://markets.back4app.io';
    Parse.initialize(
        'MpvvBsX1VBoX0yxK3TAyA2Z0valr3XkWhdtiZYmz',
        'JruGEhngyMu3qobCRiaR35YjJ5PMrjWIyw1wWCoE'
    );
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
