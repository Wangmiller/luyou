import { Component, OnInit } from '@angular/core';
import { UserAddService } from './user-add.service';
import {Hero} from './hero'
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'ngx-user-add',
    templateUrl: `./user-add.component.html`, // 组件对应的html路径
    styleUrls: ['./user-add.scss'],
    providers: [UserAddService],
})
export class UserAddComponent implements OnInit {
   constructor(private service: UserAddService) {};
   heros: Hero;
   ngOnInit() {
      this.service.getD().then(res => this.heros = res);
    }
}
