import { Component, OnInit } from '@angular/core';
import { DataCollectionDetailService } from './data_collection_detail.service';
import { XDataCollection } from '../../@xmodel/XDataCollection';
import { XPackage } from '../../@xmodel/XPackage';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'ngx-adamiya-data-collection-detail',
    styleUrls: ['data_collection_detail.scss'],
    templateUrl: 'data_collection_detail.html',
    providers: [DataCollectionDetailService],

})

export class DataCollectionDetailComponent implements OnInit {
    public product_sn: string;
    public product_name: string;
    public ad_img: string;
    public raised_amount: number;
    public progresss: number;
    public supporter: number;
    public introduction_video_url: string;
    public CurrentX = new XDataCollection();
    public project_status: string;
    xsDataCollection: XDataCollection[];
    public CurrentXX: XPackage;
    xsPackage: XPackage[];

    private handleError(error: any) {
        window.alert('对不起，' + error);
    }

    constructor(private service: DataCollectionDetailService, public route: ActivatedRoute) {
        const dateObj = new Date();
        this.product_sn = this.route.snapshot.params['sn'];
    }
  ngOnInit() {
      this.service.getD(this.product_sn).then(
          res => {
              this.xsDataCollection = res;
              this.CurrentX = this.xsDataCollection[0];
              this.introduction_video_url = this.CurrentX.introduction_video_url;
              this.ad_img = this.CurrentX.ad_img;
              this.product_name = this.CurrentX.product_name;
              this.raised_amount = this.CurrentX.raised_amount;
              this.progresss = this.CurrentX.progresss;
              this.supporter = this.CurrentX.supporter;
              this.project_status = this.CurrentX.project_status;

          }).catch(this.handleError);

      this.service.getDD(this.product_sn).then(
          res => {
              this.xsPackage = res;
              this.CurrentXX = this.xsPackage[0];
          }).catch(this.handleError);
  }

    backD() {
        window.location.href = '#/pages_a/_adamiya/data_collection_list';
    }

}
