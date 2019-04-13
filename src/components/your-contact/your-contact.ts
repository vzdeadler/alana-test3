import { Component } from '@angular/core';

/**
 * Generated class for the YourContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'your-contact',
  templateUrl: 'your-contact.html'
})
export class YourContactComponent {

  text: string;

  constructor() {
    console.log('Hello YourContactComponent Component');
    this.text = 'Hello World';
  }

  label = {
    country: 'PAÍS',
    direction: 'DIRECCIÓN',
    phone: 'TELÉFONO'
  };

  userData = {
    country: '',
    direction: ''
  };

  countries = [
    { name: 'Country 1' },
    { name: 'Country 2' },
    { name: 'Country 3' }
  ];

}
