import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { XEnterprise } from '../../@xmodel/XEnterprise';
import { XKV } from '../../@xmodel/XKV';

const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
@Injectable()
export class AllEnterpriseListService {
  constructor(private httpClient: HttpClient) {
  };

  getD(timefilter: any): Promise<XEnterprise[]> {
    // return this.http.get('/_s_adamiya/get_enterprise_list').map((res) => res.json());
    const url = '/_s_share/get_enterprise_list';
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

  setX(data: any): XEnterprise {
    const x = new XEnterprise();
    x.id = data['id'];
    x.sn = data['sn'];
    x.label = data['label'];
    x.basic_nda = data['basic_nda'];
    x.other_credits = data['other_credits'];
    x.level_label = data['level_label'];
    x.type_label = data['type_label'];
    x.level_sn = data['level_sn'];
    x.type_sn = data['type_sn'];
    x.status_sn = data['status_sn'];
    x.seo_tag = data['seo_tag'];
    /*if (data['basic_is_lenovo'] === 1)
      x.basic_is_lenovo = '是';
    else
      x.basic_is_lenovo = '否';*/
    x.basic_is_lenovo = data['basic_is_lenovo'];
    x.basic_dic_match_status_sn = data['basic_dic_match_status_sn'];
    x.basic_dic_match_status_label = data['basic_dic_match_status_label'];
    x.lenovo_label = data['lenovo_label'];
    x.create_dt = data['create_dt'];
    return x;
  }


  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }

  createD(newData, xstype, xslevel, xsstatus) {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const url = '/_s_share/create_enterprise_list';
      const listx = [];
      let typesn = '0';
      let levelsn = '0';
      let statussn = '0';
      let matchstatussn = 'before';
      if (newData['basic_dic_match_status_label'] === '已对接')
          matchstatussn = 'after';
      /*{
        matchstatussn = 'after';
      } else {
        matchstatussn == 'before'
      }*/
      /*if (newData['basic_is_lenovo'] === '是')
        islenovo = '1';*/
      xstype.forEach((val, idx, array) => {
        if (val['label'] === newData['type_label'])
          typesn = val['sn'];
      });
      xslevel.forEach((val, idx, array) => {
        if (val['label'] === newData['type_label'])
          levelsn = val['sn'];
      });
      xsstatus.forEach((val, idx, array) => {
        if (val['label'] === newData['type_label'])
          statussn = val['sn'];
      });
      const params = new HttpParams()
        .set('label', newData['label'])
        .set('basic_nda', newData['basic_nda'])
        .set('seo_tag', newData['seo_tag'])
        .set('other_credits', newData['other_credits'])
        .set('basic_dic_match_status_sn', matchstatussn)
        .set('basic_is_lenovo', newData['basic_is_lenovo'] || 0)
        .set('type_sn', typesn)
        .set('level_sn', levelsn)
        .set('status_sn', statussn)
        .set('usn', cusn)
        .set('lenovo_label', newData['lenovo_label']);
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
  }

  editD(newData, xstype, xslevel, xsstatus) {
    const url = '/_s_share/edit_enterprise_list';
    const listx = [];
    let typesn = '0';
    let levelsn = '0';
    let statussn = '0';
    let matchstatussn = 'before';
    if (newData['basic_dic_match_status_label'] === '已对接')
      matchstatussn = 'after';
    /*if (newData['basic_is_lenovo'] === '是')
      islenovo = '1';*/
    xstype.forEach((val, idx, array) => {
      if (val['label'] === newData['type_label'])
        typesn = val['sn'];
    });
    xslevel.forEach((val, idx, array) => {
      if (val['label'] === newData['type_label'])
        levelsn = val['sn'];
    });
    xsstatus.forEach((val, idx, array) => {
      if (val['label'] === newData['type_label'])
        statussn = val['sn'];
    });
    const params = new HttpParams()
      .set('label', newData['label'])
      .set('basic_nda', newData['basic_nda'])
      .set('seo_tag', newData['seo_tag'])
      .set('other_credits', newData['other_credits'])
      .set('basic_dic_match_status_sn', matchstatussn)
      .set('basic_is_lenovo', newData['basic_is_lenovo'] || 0)
      .set('type_sn', typesn)
      .set('level_sn', levelsn)
      .set('status_sn', statussn)
      .set('sn', newData['sn'])
      .set('lenovo_label', newData['lenovo_label']);
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
        const count = (<Array<string>>data).length;
        if (count > 0)
          window.alert('对不起，企业名称已存在！修改失败！');
      },
      ).catch(this.handleError);
  }

  deleteD(newData) {
    const url = '/_s_share/delete_to_recycle';
    const listx = [];
    const params = new HttpParams()
      .set('id', newData['id'])
      .set('en', 'enterprise_info');
    return this.httpClient.post(url, params,
      {
        headers,
      })
      .toPromise().then(data => {
      },
      ).catch(this.handleError);
  }

  getDEType() {
    const params = new HttpParams()
      .set('en', 'enterprise_type');
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
      .set('en', 'enterprise_status');
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
      .set('en', 'enterprise_level');
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

    /*updateAll(): void {
      const url = '/_timer/updateAll_enterprise_list';
      const params = new HttpParams()
          .set('ln', '')
      const listx = [];
      this.httpClient.post(url, params,
          {
              headers,
          })
          .toPromise().then(data => {
                  const count = (<Array<string>>data).length;
                  for (let i = 0; i < count; i++) {
                      listx.push(this.setX(data[i]));
                  }
                  return 'ok';
              },
          ).catch(this.handleError);
      /!*window.location.reload();*!/
  }*/
    updateAll(timefilter: any): Promise<XEnterprise[]> {
        const url = '/_timer/updateAll_enterprise_list';
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
                    window.alert(data['status'])
                    return listx;
                },
            ).catch(this.handleError);
    }
}
