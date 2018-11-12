import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class TestUserListService {
  constructor(private http: Http) {};
  getD() {
    return this.http.get('/_master/get_user_list').map((res) => res.json());
  }

  createD(newdata) {
    window.alert(newdata['label']);
    const params = new URLSearchParams();
    params.set('label', newdata['label']);
    params.set('position', newdata['position']);
    params.set('mobile', newdata['mobile']);
    params.set('email', newdata['email']);
    params.set('tel', newdata['tel']);
    this.http.post('/_master/create_user_list', params).toPromise().then((response) => {
      response.json();
    });
    return 'OK';
  }

  editD() {
    return this.http.get('/_master/edit_user_list').map((res) => res.json());
  }

  deleteD() {
    return this.http.get('/_master/delete_user_list').map((res) => res.json());
  }
}
