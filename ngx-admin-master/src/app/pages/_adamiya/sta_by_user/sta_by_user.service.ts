import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class STAByUserService {
    constructor(private http: Http) {};
    getD() {
      return this.http.get('/_accesses/get_user_login').map((res) => res.json());
    }
}
