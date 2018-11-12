import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {STAByProductService} from './sta_by_product.service';
import {XSTAProduct} from '../../@xmodel/XSTAProduct';

@Component({
  selector: 'ngx-sta-by-product',
  styleUrls: ['sta_by_product.scss'],
  templateUrl: 'sta_by_product.html',
  providers: [STAByProductService],

})
export class STAByProductComponent implements OnInit {
  a;  b;  c;  d;  e;  f;  g;
  xs: XSTAProduct[];
  constructor(private service: STAByProductService) {
  }

  ngOnInit() {
    this.service.getDIndustry();
    this.service.getDScene();
    this.service.getDGrowIndustryYM();
    this.service.getDGrowIndustry();
    this.service.getDSTA('0').then(
      res => {
        this.xs = res;
        if (this.xs.length === 1) {
          this.a = this.xs[0].this_year_product_industry_count.toString();
          this.b = this.xs[0].this_year_product_count.toString();
          this.c = this.xs[0].this_year_product_scene_count.toString();
          this.d = this.xs[0].this_year_product_count.toString();
          this.e = this.xs[0].this_year_product_count.toString();
          this.f = this.xs[0].all_product_count.toString();
          if (this.xs[0].last_year_product_count > 0) {
            this.g = ((this.xs[0].this_year_product_count -
              this.xs[0].last_year_product_count) * 100 /
              (this.xs[0].last_year_product_count)).toString();
          } else {
            this.g = '100';
          }
        }
      }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('对不起' + error);
    // this.xssd_scene.forEach((val, idx, array) => {
    //           this.xsld_scene.push(val.name);
    //         });
  }
}
