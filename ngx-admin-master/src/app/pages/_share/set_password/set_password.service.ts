import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
const options = new RequestOptions({ headers: headers });
const paramsL = new URLSearchParams();

@Injectable()
export class SetPasswordService {
  constructor(private http: Http) {
  };

  setP(id, oldp, newp) {
    paramsL.set('id', id);
    paramsL.set('oldp', oldp);
    paramsL.set('newp', newp);
    const url = '/_s_share/set_password';
    this.http.post(url, paramsL, options).toPromise().then((response) => {
      response.json();
    });
    return 'OK';
  }
}
