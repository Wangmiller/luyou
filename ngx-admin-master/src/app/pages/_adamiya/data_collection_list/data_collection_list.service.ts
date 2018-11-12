import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XDataCollection } from '../../@xmodel/XDataCollection';
import {XFilter} from '../../@xmodel/XFilter';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });

@Injectable()
export class DataCollectionListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(timefilter: any): Promise<XDataCollection[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_data_collection_list';
    const params = new HttpParams()
          .set('ln', '')
          .set('timefilter', timefilter);
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

    getScene(): Promise<XFilter[]> {
        const url = '/_s_share/get_scene_info';
        const params = new HttpParams();
        const listx = [];
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    const count = (<Array<string>>data).length;
                    for (let i = 0; i < count; i++) {
                        listx.push(this.setS(data[i]));
                    }
                    return listx;
                },
            ).catch(this.handleError);
    }
    getSource(): Promise<XFilter[]> {
        const url = '/_s_share/get_cf_product_source';
        const params = new HttpParams();
        const listx = [];
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    const count = (<Array<string>>data).length;
                    for (let i = 0; i < count; i++) {
                        listx.push(this.setSource(data[i]));
                    }
                    return listx;
                },
            ).catch(this.handleError);
    }
    setSource(data: any): XFilter {
        const x = new XFilter()
        x.value = data['source_name'];
        x.title = data['source_name'];
        return x;
    }
    setS(data: any): XFilter {
        const x = new XFilter()
        x.value = data['label'];
        x.title = data['label'];
        return x;
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
    return x;
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

    // createD(newData) {
    //     const cusn = localStorage.getItem('cu_sn');
    //     if (cusn && cusn !== '') {
    //         const url = '/_s_share/create_data_collection_list';
    //         const listx = [];
    //         const params = new HttpParams()
    //             .set('title', newData['title'])
    //             .set('source', newData['source'])
    //             .set('company_name', newData['company_name'])
    //             .set('industry_involved', newData['industry_involved'])
    //             .set('category', newData['category'])
    //             .set('state', newData['state'])
    //             .set('progressing', newData['progressing'])
    //             .set('supporter', newData['supporter'])
    //             .set('url', newData['url']);
    //         return this.httpClient.post(url, params,
    //             {
    //                 headers,
    //             })
    //             .toPromise().then(data => {
    //                     const count = (<Array<string>>data).length;
    //                     for (let i = 0; i < count; i++) {
    //                         listx.push(this.setX(data[i]));
    //                     }
    //                     return listx;
    //                 },
    //             ).catch(this.handleError);
    //     }
    // }

    editD(newData) {
        const url = '/_s_share/edit_data_collection_list';
        const listx = [];
        const params = new HttpParams()
            .set('sn', newData['sn'])
            .set('label', newData['label'])
        // window.alert('lll');
        return this.httpClient.post(url, params,
            {
                headers,
            })
            .toPromise().then(data => {
                    // window.alert(data);
                },
            ).catch(this.handleError);
    }

  // deleteD(newData) {
  //   const url = '/_s_share/delete_data_collection_list';
  //   const listx = [];
  //   const params = new HttpParams()
  //     .set('id', newData['id'])
  //     .set('en', 'data_collection_list');
  //   return this.httpClient.post(url, params,
  //     {
  //       headers,
  //     })
  //     .toPromise().then(data => {
  //       window.alert(data);
  //     },
  //     ).catch(this.handleError);
  // }

  doAdd(newData) {
    const url = '/_s_share/add_product_enterprise';
    const listx = [];
    const params = new HttpParams()
        .set('sn', newData['sn'])
        .set('enterprise_sn', newData['enterprise_sn'])
    return this.httpClient.post(url, params,
        {
            headers,
        })
        .toPromise().then(data => {
                window.alert(data['status']);
            },
        ).catch(this.handleError);
    }
}
