import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {STAByDateService} from './sta_by_date.service'

@Component({
  selector: 'ngx-sta-by-date',
  styleUrls: ['sta_by_date.scss'],
  templateUrl: 'sta_by_date.component.html',
  providers: [STAByDateService],

})
export class STAByDateComponent implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];

  constructor(private service: STAByDateService) {
    this.dataSource = this.service.getD();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data,
    )
  }
}
