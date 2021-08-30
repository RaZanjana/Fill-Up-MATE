import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { timer } from 'rxjs/observable/timer';
import { AboutUsPage } from '../pages/about-us/about-us';
import { FilterPage } from '../pages/filter/filter';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { VehiclePage } from '../pages/vehicle/vehicle';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  showSplash = true;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.initializeApp();
      statusBar.styleDefault();
      splashScreen.hide();

      timer(2000).subscribe(() => this.showSplash = false)
    });
    this.pages = [
      { title: 'Map', component: HomePage, icon:"md-map" },
      { title: 'Filter', component: FilterPage, icon: "ios-folder" },
      { title: 'Complaints', component: ContactUsPage, icon: "md-mail" },
      { title: 'My Vehicle', component: VehiclePage, icon: "ios-car" },
      { title: 'Documentation', component: AboutUsPage, icon: "md-copy" },
      { title: 'Disclaimer', component: DisclaimerPage, icon: "md-information-circle" }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

