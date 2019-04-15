import { Component } from '@angular/core';

/**
 * Generated class for the YourAccountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'your-account',
  templateUrl: 'your-account.html'
})
export class YourAccountComponent {

  text: string;
  passwordType: string;

  label = {
    email: 'EMAIL',
    password: 'CONTRASEÑA',
    confirmPassword: 'CONFIRMAR CONTRASEÑA'
  };

  userData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor() {
    console.log('Hello YourAccountComponent Component');
    this.text = 'Hello World';
    this.passwordType = 'password';
  }

  togglePassword(): void {
    console.log('asd');
    this.passwordType == 'password' ? this.passwordType = 'text' : this.passwordType = 'password'; 
  }

}
