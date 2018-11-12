import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {STAByUserService} from './sta_by_user.service'

@Component({
  selector: 'ngx-sta-by-user',
  styleUrls: ['sta_by_user.scss'],
  templateUrl: 'sta_by_user.component.html',
  providers: [STAByUserService],

})
export class STAByUserComponent implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];

  constructor(private service: STAByUserService) {
    this.dataSource = this.service.getD();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data,
    )
  }
}
