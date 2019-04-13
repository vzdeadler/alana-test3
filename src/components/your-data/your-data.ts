import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the YourDataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'your-data',
  templateUrl: 'your-data.html'
})
export class YourDataComponent {

  label = {
    name: 'NOMBRE',
    lastname: 'APELLIDO',
    sex: 'SEXO',
    birthday: 'FECHA DE NACIMIENTO'
  };

  sexValues = [
    { name: 'Hombre', value: 35},
    { name: 'Mujer', value: 36},
    { name: 'Otro', value: 37},
  ];

  userData = {
    name: '',
    lastname: '',
    sex: '',
    birthday: 'FECHA DE NACIMIENTO'
  };

  @Output() res: EventEmitter<any> = new EventEmitter<any>();

  text: string;

  constructor() {
    console.log('Hello YourDataComponent Component');
    this.text = 'Hello World';
  }

  resData(): void {
    this.res.emit(this.userData);
  };

}
