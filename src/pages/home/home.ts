import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text = {
    register: 'Registrarse'
  };

  constructor(public navCtrl: NavController) {

  }

  gotoRegister(): void {
    this.navCtrl.push(RegisterPage);
  }

}
