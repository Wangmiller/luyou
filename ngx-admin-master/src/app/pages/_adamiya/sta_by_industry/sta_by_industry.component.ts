import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {STAByIndustryService} from './sta_by_industry.service'

@Component({
  selector: 'ngx-sta-by-industry',
  styleUrls: ['sta_by_industry.scss'],
  templateUrl: 'sta_by_industry.component.html',
  providers: [STAByIndustryService],

})
export class STAByIndustryComponent implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];

  constructor(private service: STAByIndustryService) {
    this.dataSource = this.service.getD();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data,
    )
  }
}
