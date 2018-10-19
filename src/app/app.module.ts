import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LessonsService } from '../services/lessons.service';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PogodaPage } from '../pages/pogoda/pogoda';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewLessonPage } from '../pages/new-lesson/new-lesson';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification';
import { DatabaseProvider } from '../providers/database/database';

import { SQLite } from '@ionic-native/sqlite';

import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewLessonPage,
    PogodaPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewLessonPage,
    PogodaPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PhonegapLocalNotification,
    SQLite,
    
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}, LessonsService,PhonegapLocalNotification,
    DatabaseProvider
  ]
})
export class AppModule {}
