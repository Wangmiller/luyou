import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';

@Injectable()
export class UserAddService {
    constructor(private http: Http) {};

    private handleError(error: any): Promise<any> {
        console.error('An error occurred' + error);
        return Promise.reject(error.message || error);
    }
    getD(): Promise<Hero> {
    const url1 = '/_accesses/get_user_login';
    return this.http.get(url1).toPromise().then(res => res.json() as Hero).catch(this.handleError);
    }
}
