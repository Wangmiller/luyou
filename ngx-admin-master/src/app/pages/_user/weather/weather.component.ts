import {Component, OnInit} from '@angular/core';
import {XSTAUser} from '../../@xmodel/XSTAUser';

@Component({
  selector: 'ngx-weather',
  styleUrls: ['./weather.component.scss'],
  templateUrl: './weather.component.html',
})

export class WeatherComponent implements OnInit {
  CDT: string;
  PlatformAVGFact: string;
  TotalProductFavorCount: string;
  TotalUserEnterpriseCount: string;
  TotalUserProductCount: string;
  TotalUserProjectCount: string;
  TotalUserFileCount: string;
  TotalEnterpriseLenovoCount: string;
  TotalProductFavoredCount: string;
  TotalProjectLenovoCount: string;
  xs: XSTAUser[];
  constructor() {
    this.CDT = Date();
  }

  ngOnInit() {
    const usn = localStorage.getItem('cu_sn');
    if (usn && usn !== '') {
      const ls1 = localStorage.getItem(usn + '_sta_user');
      // window.alert(ls1);
      this.xs = JSON.parse(ls1);
      if (this.xs.length === 1) {
        this.TotalProductFavorCount = this.xs[0].TotalProductFavorCount.toString();
        this.TotalUserEnterpriseCount = this.xs[0].TotalUserEnterpriseCount.toString();
        this.TotalUserProductCount = this.xs[0].TotalUserProductCount.toString();
        this.TotalUserProjectCount = this.xs[0].TotalUserProjectCount.toString();
        this.TotalUserFileCount = this.xs[0].TotalUserFileCount.toString();
        this.TotalEnterpriseLenovoCount = this.xs[0].TotalEnterpriseLenovoCount.toString();
        this.TotalProductFavoredCount = this.xs[0].TotalProductFavoredCount.toString();
        this.TotalProjectLenovoCount = this.xs[0].TotalProjectLenovoCount.toString();
        if (this.xs[0].TotalUserProductCount !== 0 &&
          this.xs[0].TotalUserEnterpriseCount !== 0 &&
          this.xs[0].TotalUserProjectCount !== 0) {
          this.PlatformAVGFact = ((this.xs[0].TotalProductFavoredCount +
            this.xs[0].TotalEnterpriseLenovoCount +
            this.xs[0].TotalProjectLenovoCount) * 100 /
            (this.xs[0].TotalUserProductCount +
              this.xs[0].TotalUserEnterpriseCount +
              this.xs[0].TotalUserProjectCount)).toString();
        } else {
          this.PlatformAVGFact = '0';
        }
      }
    }
  }
}
