import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from './../pages/register/register';
import { ReferalModalPage } from './../pages/referal-modal/referal-modal';

import { YourAccountComponent } from './../components/your-account/your-account';
import { YourContactComponent } from './../components/your-contact/your-contact';
import { YourDataComponent } from './../components/your-data/your-data';
import { CodeProvider } from '../providers/code/code';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ReferalModalPage,
    YourAccountComponent,
    YourDataComponent,
    YourContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { scrollPadding: false })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ReferalModalPage,
    YourAccountComponent,
    YourDataComponent,
    YourContactComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CodeProvider
  ]
})
export class AppModule {}
