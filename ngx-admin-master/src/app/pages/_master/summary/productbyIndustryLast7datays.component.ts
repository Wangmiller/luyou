import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
// import {ProductbyIndustryLast7DaysService} from './productbyIndustryLast7datays.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { XIndustryLast7 } from '../../@xmodel/XIndustryLast7';
const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
@Component({
  selector: 'ngx-echarts-bar-product-last7',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
  // providers: [ProductbyIndustryLast7DaysService],
})
export class ProductbyIndustryLast7DaysComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private httpClient: HttpClient) {

  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      // const productX=JSON.parse(localStorage.getItem('product_by_industry_last7_x'));
      // const productY=JSON.parse(localStorage.getItem('product_by_industry_last7_y'));

      // console.log(1);

      // localStorage.setItem('product_by_industry_last7_x',JSON.stringify([]));
      // localStorage.setItem('product_by_industry_last7_y',JSON.stringify([]));

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;




      const url = '/_s_adamiya/get_industry_last7_list';
      const params = new HttpParams()
        .set('ln', '');
      const listx = [];
      this.httpClient.post(url, params,
        {
          headers,
        })
        .toPromise().then(data => {

          // console.log(data);
          var XArray = [];
          var YArray = [];
          const count = (<Array<string>>data).length;
          for (let i = 0; i < count; i++) {
            // const data[i] = array[i];
            XArray.push(data[i].label);
            YArray.push(data[i].newadded);
          }
          // console.log(XArray);
          // localStorage.setItem('product_by_industry_last7_x',JSON.stringify(XArray));
          // localStorage.setItem('product_by_industry_last7_y',JSON.stringify(YArray));
          // console.log(2);

          this.options = {
            backgroundColor: echarts.bg,
            color: [colors.primaryLight],
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            },
            xAxis: [
              {
                type: 'category',
                data: XArray,
                axisTick: {
                  alignWithLabel: true,
                },
                axisLine: {
                  lineStyle: {
                    color: echarts.axisLineColor,
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
            ],
            yAxis: [
              {
                type: 'value',
                axisLine: {
                  lineStyle: {
                    color: echarts.axisLineColor,
                  },
                },
                splitLine: {
                  lineStyle: {
                    color: echarts.splitLineColor,
                  },
                },
                axisLabel: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
            ],
            series: [
              {
                name: '數目',
                type: 'bar',
                barWidth: '60%',
                data: YArray,
                label:{
                  normal:{
                      show:true,            //显示数字
                      position: 'top'        //这里可以自己选择位置
                  }
              }
          
 
              },
            ],
          };

        },
        ).catch(this.handleError);





    });
  }
  handleError(error: any): Promise<any> {
    console.error('对不起' + error);
    return Promise.reject(error.message || error);
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
