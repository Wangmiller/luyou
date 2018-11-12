import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XDataCollection } from '../../@xmodel/XDataCollection';
import { XPackage } from '../../@xmodel/XPackage';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });

@Injectable()
export class DataCollectionDetailService {
  constructor(private httpClient: HttpClient) {
  };
    getD(product_sn): Promise<XDataCollection[]> {
        const url = '/_s_share/get_data_collection_detail';
        const params = new HttpParams()
            .set('product_sn', product_sn);
        const listx = [];
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    const count = (<Array<string>>data).length;
                    for (let i = 0; i < count; i++) {
                        listx.push(this.setX(data[i]));
                    }
                    return listx;
                },
            ).catch(this.handleError);
    }
    getDD(product_sn): Promise<XPackage[]> {
        const url = '/_s_share/get_package_info';
        const params = new HttpParams()
            .set('product_sn', product_sn);
        const listx = [];
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    const count = (<Array<string>>data).length;
                    for (let i = 0; i < count; i++) {
                        listx.push(this.setXX(data[i]));
                    }
                    return listx;
                },
            ).catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('对不起' + error);
        return Promise.reject(error.message || error);
    }

    setX(data: any): XDataCollection {
        const x = new XDataCollection();
        x.id = data['id'];
        x.sn = data['sn'];
        x.enterprise_sn = data['enterprise_sn'];
        x.scene_sn = data['scene_sn'];
        x.keyword = data['keyword'];
        x.source = data['source'];
        x.project_status = data['project_status'];
        x.detail_url = data['detail_url'];
        x.product_name = data['product_name'];
        x.raise_target = data['raise_target'];
        x.raised_amount = data['raised_amount'];
        x.unit = data['unit'];
        x.progresss = data['progress'];
        x.supporter = data['supporter'];
        x.ad_img = data['ad_img'];
        x.introduction = data['introduction'];
        x.introduction_video_url = data['introduction_video_url'];
        x.introduction_img_url = data['introduction_img_url'];
        x.create_dt = data['create_dt'];
        x.update_dt = data['update_dt'];
        x.enterprise_name = data['enterprise_name'];
        x.label = data['label'];
        x.address = data['address'];
        x.telphone = data['telphone'];
        x.shop_name = data['shop_name'];
        x.shop_url = data['shop_url'];
        x.promoters = data['promoters'];
        x.promoters_url = data['promoters_url'];
        // if (data['state'] === '1')
        //   x.state = '众筹中';
        // else if (data['state'] === '2')
        //   x.state = '众筹结束';
        return x;
    }

    setXX(data: any): XPackage {
        const x = new XPackage();
        x.id = data['id'];
        x.sn = data['sn'];
        x.product_sn = data['product_sn'];
        x.product_name = data['product_name'];
        x.detail_url = data['detail_url'];
        x.title = data['title'];
        x.price = data['price'];
        x.unit = data['unit'];
        x.limit_support = data['limit_support'];
        x.surplus_support = data['surplus_support'];
        x.supporter = data['supporter'];
        x.info = data['info'];
        x.create_dt = data['create_dt'];
        x.update_dt = data['update_dt'];
        return x;
    }
}
