import { YourDataComponent } from './../../components/your-data/your-data';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  // this.formSlider.lockSwipes(false);
  // this.formSlider.slideNext(500);
  // this.formSlider.lockSwipes(true);

  @ViewChild('navbar') navBar: Navbar;
  @ViewChild('formSlider') formSlider: Slides;
  @ViewChild(YourDataComponent) yourData: YourDataComponent;
  slideStep: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.formSlider.lockSwipes(true);
    this.slideStep = 1;
  }

  btnController(): void {
    switch(this.slideStep){
      case 1:
        this.validateYourData();
        break;
      
      case 2:
        this.validateYourAccount();
        break;

      case 3:
        break;

      default:
        break;
    };
  };

  backController(): void {
    if(this.slideStep > 1){
      this.formSlider.lockSwipes(false);
      this.formSlider.slidePrev(500);
      this.formSlider.lockSwipes(true);
      this.slideStep -= 1;
    }else{
      this.navCtrl.pop();
    }
  };

  validateYourData(): void {
    if(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(this.yourData.userData.name)
      && /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(this.yourData.userData.lastname)
      && this.yourData.userData.sex
      // && this.yourData.userData.birthday
      && this.yourData.userData.birthday != 'FECHA DE NACIMIENTO')
    {
      this.formSlider.lockSwipes(false);
      this.formSlider.slideNext(500);
      this.formSlider.lockSwipes(true);
      this.slideStep += 1;
    }
  };

  validateYourAccount(): void {

  }

  validateYourContact(): void {

  }

}
