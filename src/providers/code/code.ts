import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CodeProvider {

  code: string;
  url: string;

  constructor(public http: HttpClient) {
    this.url = 'https://apidev.alanajobs.com';
  }

  sendCode(data): any {
    return this.http.post( 
      this.url + '/candidate/check-code',
      { code: data.code }
    );
  };

}
