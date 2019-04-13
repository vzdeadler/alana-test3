import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from './../pages/register/register';

import { YourAccountComponent } from './../components/your-account/your-account';
import { YourContactComponent } from './../components/your-contact/your-contact';
import { YourDataComponent } from './../components/your-data/your-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    YourAccountComponent,
    YourDataComponent,
    YourContactComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollPadding: false })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    YourAccountComponent,
    YourDataComponent,
    YourContactComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
