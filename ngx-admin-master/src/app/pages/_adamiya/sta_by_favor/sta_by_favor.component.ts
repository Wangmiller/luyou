import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {STAByFavorService} from './sta_by_favor.service'

@Component({
  selector: 'ngx-sta-by-favor',
  styleUrls: ['sta_by_favor.scss'],
  templateUrl: 'sta_by_favor.component.html',
  providers: [STAByFavorService],

})
export class STAByFavorComponent implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];

  constructor(private service: STAByFavorService) {
    this.dataSource = this.service.getD();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data,
    )
  }
}
