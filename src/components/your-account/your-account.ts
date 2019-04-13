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

  label = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  userData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor() {
    console.log('Hello YourAccountComponent Component');
    this.text = 'Hello World';
  }

}
