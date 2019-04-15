import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Navbar, ModalController } from 'ionic-angular';

import { ReferalModalPage } from './../referal-modal/referal-modal';

import { YourContactComponent } from '../../components/your-contact/your-contact';
import { YourDataComponent } from './../../components/your-data/your-data';
import { YourAccountComponent } from '../../components/your-account/your-account';

import { CodeProvider } from './../../providers/code/code';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('navbar') navBar: Navbar;
  @ViewChild('formSlider') formSlider: Slides;
  @ViewChild(YourDataComponent) yourData: YourDataComponent;
  @ViewChild(YourContactComponent) yourContact: YourContactComponent;
  @ViewChild(YourAccountComponent) yourAccount: YourAccountComponent;

  slideStep: number;
  headerTitle: string;
  referalCode: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private modalCtrl: ModalController,
    private codeProvider: CodeProvider
    //public referalPage: ReferalModalPage
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.formSlider.lockSwipes(true);
    this.slideStep = 1;
    this.headerTitle = 'Tus datos';
  }

  btnController(): void {
    console.log(this.slideStep);
    switch(this.slideStep){
      case 1:
        this.validateYourData();
        break;
      
      case 2:
        this.validateYourContact();
        break;

      case 3:
        this.validateYourAccount();
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
    this.openReferalModal();
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
      this.headerTitle = 'Tu contacto';
    }
  };

  validateYourContact(): void {
    if(this.yourContact.userData.country && this.yourContact.userData.countryCode 
      && this.yourContact.userData.phone && this.yourContact.userData.direction)
    {
      this.formSlider.lockSwipes(false);
      this.formSlider.slideNext(500);
      this.formSlider.lockSwipes(true);
      this.slideStep += 1;
      this.headerTitle = 'Tu cuenta';
    }
  };

  validateYourAccount(): void {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.yourAccount.userData.email)
    && this.yourAccount.userData.password.length > 7
    && this.yourAccount.userData.password == this.yourAccount.userData.confirmPassword)
    {
      this.openReferalModal();
    }
  }

  openReferalModal(): void {
    let opts: any = {
      showBackdrop: true,
      enableBackdropDismiss: true
    }

    let modal = this.modalCtrl.create(ReferalModalPage, {}, opts);
    modal.present();
    
    modal.onDidDismiss( (data) => {
      console.log(data);
      if( data ){
        this.codeProvider.sendCode(data).subscribe( 
          (data) => {
            console.log( data )
          },
          (err) => {
            console.log(err);
          }
        );
        console.log( this.yourAccount.userData );
        console.log( this.yourContact.userData );
        console.log( this.yourData.userData );
      }
    });

    //this.referalCode = this.referalModal.userData.code;
  };

}
