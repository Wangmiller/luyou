import { DoCheck, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {XSTAAreaStackSeriesData} from '../../@xmodel/XSTAAreaStackSeriesData';

@Component({
  selector: 'ngx-echarts-area-stack-product',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsAreaStackProductComponent implements DoCheck, OnDestroy {
  options: any = {};
  themeSubscription: any;
  xssd_grow_industry: XSTAAreaStackSeriesData[];
  xsld_industry: string[];
  xsld_year_month: string[];
  constructor(private theme: NbThemeService) {
  }

  ngDoCheck() {
    const ls0 = localStorage.getItem('sta_by_product_grow_industry_dt');
    if (ls0 && ls0 === '1') {
      localStorage.setItem('sta_by_product_grow_industry_dt', '');
      const ls1 = localStorage.getItem('sta_by_product_xsld_year_month');
      // window.alert(ls1);
      const ls2 = localStorage.getItem('sta_by_product_xsld_industry');
      // window.alert(ls2);
      const ls3 = localStorage.getItem('sta_by_product_xssd_grow_industry');
      // window.alert(ls3);
      this.xsld_year_month = JSON.parse(ls1);
      this.xsld_industry = JSON.parse(ls2);
      this.xssd_grow_industry = JSON.parse(ls3);
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors: any = config.variables;
        const echarts: any = config.variables.echarts;

        this.options = {
          backgroundColor: echarts.bg,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: echarts.tooltipBackgroundColor,
              },
            },
          },
          legend: {
            data: this.xsld_industry,
            textStyle: {
              color: echarts.textColor,
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
              boundaryGap: false,
              data: this.xsld_year_month,
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
          series: this.xssd_grow_industry,
        };
      });
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
