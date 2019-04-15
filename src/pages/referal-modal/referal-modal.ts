import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReferalModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referal-modal',
  templateUrl: 'referal-modal.html',
})
export class ReferalModalPage {

  label = {
    codeInput: 'Escribe el código aquí',
    sendCode: 'Enviar',
    noCode: 'No tengo un código'
  };

  public userData = {
    code: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.userData.code = '';
  }

  sendCode(input: number): void {
    if(input == 0)
      this.viewCtrl.dismiss({ code: '' });
    else
      this.viewCtrl.dismiss({ code: this.userData.code });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferalModalPage');
  }
}
