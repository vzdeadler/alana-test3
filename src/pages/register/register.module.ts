import { NgModule } from '@angular/core';
import { IonicPageModule, ModalController } from 'ionic-angular';
import { RegisterPage } from './register';
import { ReferalModalPage } from './../referal-modal/referal-modal';

@NgModule({
  declarations: [
    RegisterPage,
    ReferalModalPage
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ReferalModalPage
  ],
})
export class RegisterPageModule {}
