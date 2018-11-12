import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {STABySceneService} from './sta_by_scene.service'

@Component({
  selector: 'ngx-sta-by-scene',
  styleUrls: ['sta_by_scene.scss'],
  templateUrl: 'sta_by_scene.component.html',
  providers: [STABySceneService],

})
export class STABySceneComponent implements OnInit {
  dataSource: Observable<any>;
  dataSet: Array<any> = [];

  constructor(private service: STABySceneService) {
    this.dataSource = this.service.getD();
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.dataSet = data,
    )
  }
}
