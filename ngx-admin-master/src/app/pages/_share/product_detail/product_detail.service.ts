import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XProduct } from '../../@xmodel/XProduct';
import { XIndustry } from '../../@xmodel/XIndustry';
import { XScene } from '../../@xmodel/XScene';
import { XKV } from '../../@xmodel/XKV';
import { XCheckExist } from '../../@xmodel/XCheckExist';
import {XFile} from '../../@xmodel/XFile';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset =utf-8'});

@Injectable()
export class ProductDetailService {
  constructor(private httpClient: HttpClient) {
  };

  getD(sn): Promise<XProduct[]> {
    const url = '/_s_share/get_product_detail';
    const params = new HttpParams()
      .set('sn', sn);
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

  getDIndustry(sn) {
    const url = '/_s_share/get_product_industry_list';
    const listx = [];
    const params = new HttpParams()
      .set('sn', sn);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setIndustry(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDIndustryNA(sn) {
    const url = '/_s_share/get_product_industry_na_list';
    const listx = [];
    const params = new HttpParams()
      .set('sn', sn);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setIndustry(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  addIndustry(esn, isn) {
    const url = '/_s_share/add_product_industry';
    const params = new HttpParams()
      .set('esn', esn)
      .set('isn', isn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setIndustry(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  deleteIndustry(esn, isn) {
    const url = '/_s_share/delete_product_industry';
    const params = new HttpParams()
      .set('esn', esn)
      .set('isn', isn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setIndustry(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  setIndustry(data: any): XIndustry {
    const x = new XIndustry();
    x.sn = data['sn'];
    x.label = data['label'];
    x.is_checked = data['is_checked'];
    return x;
  }

  getDScene(sn) {
    const url = '/_s_share/get_product_scene_list';
    const params = new HttpParams()
      .set('sn', sn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setScene(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDSceneNA(sn) {
    const url = '/_s_share/get_product_scene_na_list';
    const params = new HttpParams()
      .set('sn', sn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setScene(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  addScene(esn, ssn) {
    const url = '/_s_share/add_product_scene';
    const params = new HttpParams()
      .set('esn', esn)
      .set('ssn', ssn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setScene(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  deleteScene(esn, ssn) {
    const url = '/_s_share/delete_product_scene';
    const params = new HttpParams()
      .set('esn', esn)
      .set('ssn', ssn);
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        const count = (<Array<string>>data).length;
        for (let i = 0; i < count; i++) {
          listx.push(this.setScene(data[i]));
        }
        return listx;
      },
    ).catch(this.handleError);
  }

  setScene(data: any): XScene {
    const x = new XScene();
    x.sn = data['sn'];
    x.label = data['label'];
    x.is_checked = data['is_checked'];
    return x;
  }

  getDUserContact(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_product_user_contact_list';
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

  getDUserLenovo(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_product_user_lenovo_list';
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

  getDProject(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_product_project_list';
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

  getDProduct(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_product_product_list';
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

  getDEType() {
    const params = new HttpParams()
      .set('en', 'product_type');
    const url = '/_s_share/get_kv_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setKV(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDEStatus() {
    const params = new HttpParams()
      .set('en', 'product_status');
    const url = '/_s_share/get_kv_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setKV(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  getDELevel() {
    const params = new HttpParams()
      .set('en', 'product_level');
    const url = '/_s_share/get_kv_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setKV(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setKV(data: any): XKV {
    const x = new XKV();
    x.sn = data['sn'];
    x.label = data['label'];
    return x;
  }

  setX(data: any): XProduct {
    const x = new XProduct();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.creator_sn = data['creator_sn'];
    x.create_dt = data['create_dt'];
    x.custom_code = data['custom_code'];
    x.last_update_dt = data['last_update_dt'];
    x.display_code = data['display_code'];
    x.is_deleted = data['is_deleted'];
    x.is_na = data['is_na'];
    x.class_sn = data['class_sn'];
    x.type_sn = data['type_sn'];
    x.status_sn = data['status_sn'];
    x.level_sn = data['level_sn'];
    x.class_label = data['class_label'];
    x.type_label = data['type_label'];
    x.level_label = data['level_label'];
    x.status_label = data['status_label'];
    x.more_info = data['more_info'];
    x.seo_tag = data['seo_tag'];
    x.sku = data['sku'];
    x.moq = data['moq'];
    x.moq_unit = data['moq_unit'];
    x.price_sale = data['price_sale'];
    x.price_out = data['price_out'];
    x.creator_label = data['creator_label'];
    x.project_label = data['project_label'];
    x.enterprise_label = data['enterprise_label'];
    return x;
  }

  editD(x) {
    const url = '/_s_share/edit_product_detail';
    const listx = [];
    const params = new HttpParams()
      .set('sn', x.sn)
      .set('label', x.label)
      .set('custom_code', x.custom_code)
      .set('display_code', x.display_code)
      .set('is_deleted', x.is_deleted)
      .set('is_na', x.is_na)
      .set('class_sn', x.class_sn)
      .set('type_sn', x.type_sn)
      .set('status_sn', x.status_sn)
      .set('level_sn', x.level_sn)
      .set('moq_unit', x.moq_unit)
      .set('moq', x.moq)
      .set('sku', x.sku)
      .set('price_sale', x.price_sale)
      .set('price_out', x.price_out)
      .set('more_info', x.more_info)
      .set('seo_tag', x.seo_tag)
      .set('id', x.id);

    return this.httpClient.post(url, params,
      {
        headers,
      }).toPromise().then(data => {
        window.alert(data);
      },
    ).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  addFavor(sn): Promise<XCheckExist[]> {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/add_product_user_favor';
      const listx = [];
      const params = new HttpParams()
        .set('psn', sn)
        .set('usn', cusn);
      return  this.httpClient.post(url, params,
        {
          headers,
        }).toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            const x = new XCheckExist();
            x.id = data[i]['id'];
            listx.push(x);
          }
          return listx;
        },
      ).catch(this.handleError);
    }
  }

  getFavor(sn): Promise<XCheckExist[]> {
    const url = '/_s_share/check_user_favor_product';
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const params = new HttpParams()
        .set('psn', sn)
        .set('usn', cusn);
      const listx = [];
      return this.httpClient.post(url, params,
        {
          headers,
        })
        .toPromise().then(data => {
            const count = (<Array<string>>data).length;
            for (let i = 0; i < count; i++) {
              const x = new XCheckExist();
              x.id = data[i]['id'];
              listx.push(x);
            }
            return listx;
          },
        ).catch(this.handleError);
    }
  }

  getDFile(sn) {
    const params = new HttpParams()
      .set('sn', sn);
    const url = '/_s_share/get_product_file_list';
    const listx = [];
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            listx.push(this.setXFile(data[i]));
          }
          return listx;
        },
      ).catch(this.handleError);
  }

  setXFile(data: any): XFile {
    const x = new XFile();
    x.id = data['id'];
    x.sn = data['file_sn'];
    x.label = data['label'];
    x.custom_code = data['custom_code'];
    x.display_code = data['display_code'];
    x.is_deleted = data['is_deleted'];
    x.is_na = data['is_na'];
    const create_dt = new Date(data['create_dt']);
    x.create_dt = create_dt.toLocaleString();
    x.file_bytes = data['file_bytes'];
    x.file_postfix = data['file_postfix'];
    x.file_md5 = data['file_md5'];
    x.file_save_path = data['file_save_path'];
    return x;
  }

  download(sn, label) {
    const url = '/_s_share/get_attach_file?sn=' + sn;
    this.httpClient.get(url, {headers: headers, observe: 'response', responseType: 'blob'}).subscribe(response => {
      // window.alert(response);
      // window.alert(response.headers.keys());
      this.downloadFile(label, response);
    }, (error: HttpErrorResponse) => {
      window.alert(error.error);
    });
  }

  downloadFile(label, data: HttpResponse<Blob>) {
    const file = new Blob([data.body], {type: 'application/octet-stream'});
    const a = document.createElement('a');
    a.id = 'tempId';
    document.body.appendChild(a);
    a.download = label;
    a.href = URL.createObjectURL(file);
    a.click();
    const tempA = document.getElementById('tempId');
    if (tempA) {
      tempA.parentNode.removeChild(tempA);
    }
  }
}
