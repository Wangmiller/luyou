import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class STAByAllService {
    constructor(private http: Http) {};
    getD() {
      return this.http.get('/_master/sta_by_all').map((res) => res.json());
    }
}
