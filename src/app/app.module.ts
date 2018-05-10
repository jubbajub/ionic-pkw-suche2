import { AnnonceListService } from './../services/annonce-list/annonce-list-services';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListAltPage } from '../pages/list_alt/list_alt';
import { SuchePage } from '../pages/suche/suche';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FIREBASE_CONFIG } from './firebase.credentials';

//diese drei Locale... wird unter anderem für die currency-pipe benötigt
//Außerdem muss im provider ..    { provide: LOCALE_ID, useValue: 'de' }
//und hier im constructor ...registerLocaleData(localeDe); eingetragen werden
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListAltPage,
    SuchePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListAltPage,
    SuchePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'de' },
    AnnonceListService
  ]
})
export class AppModule {
    constructor() {
    registerLocaleData(localeDe);
  }
}
