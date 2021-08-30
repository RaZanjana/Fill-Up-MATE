import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { Petrol95Page } from '../pages/petrol95/petrol95';
import { Petrol92Page } from '../pages/petrol92/petrol92';
import { LsdPage } from '../pages/lsd/lsd';
import { LadPage } from '../pages/lad/lad';
import { LkPage } from '../pages/lk/lk';
import { AboutUsPage } from '../pages/about-us/about-us';
import { FilterPage } from '../pages/filter/filter';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { EmailComposer } from '@ionic-native/email-composer';
import { AddcarPage } from '../pages/addcar/addcar';
import { EditcarPage } from '../pages/editcar/editcar';
import { SQLite } from '@ionic-native/sqlite';
import { NightHomePage } from '../pages/night-home/night-home';
import { IonicStorageModule } from '@ionic/storage';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactUsPage,
    Petrol95Page,
    Petrol92Page,
    LsdPage,
    LadPage,
    LkPage,
    NightHomePage,
    AboutUsPage,
    FilterPage,
    DisclaimerPage,
    VehiclePage,
    AddcarPage,
    EditcarPage
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactUsPage,
    Petrol95Page,
    Petrol92Page,
    LsdPage,
    LadPage,
    LkPage,
    AboutUsPage,
    FilterPage,
    DisclaimerPage,
    VehiclePage,
    AddcarPage,
    EditcarPage,
    NightHomePage
  ],
  providers: [
    SQLite,
    StatusBar,
    SplashScreen,
    Geolocation,
    CallNumber,
    InAppBrowser,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
