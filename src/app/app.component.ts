import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ListPage } from '../pages/list/list';
import { SuchePage } from '../pages/suche/suche';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SuchePage; // Not Lazy Loading

  pages: Array<{
    title: string, 
    component: any,
    icon: string}
    >;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation in the Menu
    this.pages = [
      { title: 'Suche', component: SuchePage, icon: "search"  }, //NOT Lazy Loading
      { title: 'Verkaufen', component: 'VerkaufenPage', icon: "cash"  }, //Lazy Loading,
      { title: 'Bewerten', component: 'BewertenPage', icon: "trending-up"  }, //Lazy Loading
      { title: 'Parkplatz', component: 'ParkplatzPage', icon: "bus"  }, //Lazy Loading
      { title: 'Meine Suchen', component: 'MeineSuchenPage', icon: "star"  }, //Lazy Loading
      { title: 'List', component: ListPage, icon: "menu"  }, // Not Lazy Loading
   
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
