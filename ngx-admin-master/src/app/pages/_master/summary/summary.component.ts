import { Component, OnInit } from '@angular/core';
import { XSTAMaster } from '../../@xmodel/XSTAMaster';

// import {EchartsBarComponent} from '../../charts/echarts/echarts-bar.component';
@Component({
  selector: 'ngx-summary',
  styleUrls: ['./summary.component.scss'],
  templateUrl: './summary.component.html',
})

export class SummaryComponent implements OnInit {
  CDT: string;
  PlatformAVGFact: string;
  TotalUserCount: string;
  TotalEnterpriseCount: string;
  TotalProductCount: string;
  TotalProjectCount: string;
  TotalEnterpriseRelatedIndustryCount: string;
  TotalEnterpriseRelatedSceneCount: string;
  TotalProductRelatedIndustryCount: string;
  TotalProductRelatedSceneCount: string;
  xs: XSTAMaster[];
  constructor() {
    this.CDT = Date();
  }

  ngOnInit() {
    const usn = localStorage.getItem('cu_sn');
    if (usn && usn !== '') {
      const ls1 = localStorage.getItem(usn + '_sta_master');
      // window.alert(ls1);
      this.xs = JSON.parse(ls1);
      if (this.xs.length === 1) {
        this.TotalUserCount = this.xs[0].TotalUserCount.toString();
        this.TotalEnterpriseCount = this.xs[0].TotalEnterpriseCount.toString();
        this.TotalProductCount = this.xs[0].TotalProductCount.toString();
        this.TotalProjectCount = this.xs[0].TotalProjectCount.toString();
        this.TotalEnterpriseRelatedIndustryCount = this.xs[0].TotalEnterpriseRelatedIndustryCount.toString();
        this.TotalEnterpriseRelatedSceneCount = this.xs[0].TotalEnterpriseRelatedSceneCount.toString();
        this.TotalProductRelatedIndustryCount = this.xs[0].TotalProductRelatedIndustryCount.toString();
        this.TotalProductRelatedSceneCount = this.xs[0].TotalProductRelatedSceneCount.toString();
        if (this.xs[0].TotalEnterpriseCount !== 0 && this.xs[0].TotalEnterpriseCount !== 0) {
          this.PlatformAVGFact = ((this.xs[0].TotalEnterpriseRelatedIndustryCount +
            this.xs[0].TotalEnterpriseRelatedSceneCount +
            this.xs[0].TotalProductRelatedIndustryCount +
            this.xs[0].TotalProductRelatedSceneCount) * 100 /
            (this.xs[0].TotalEnterpriseCount * 2 + this.xs[0].TotalProductCount * 2)).toString();
        } else {
          this.PlatformAVGFact = '0';
        }
      }

    }
  }



}
