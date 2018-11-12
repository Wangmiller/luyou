import { DoCheck, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {XSTAPieSeriesData} from '../../@xmodel/XSTAPieSeriesData'

@Component({
  selector: 'ngx-echarts-pie-industry-enterprise',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieIndustryEnterpriseComponent implements DoCheck, OnDestroy {
  options: any = {};
  themeSubscription: any;
  xssd_industry: XSTAPieSeriesData[];
  xsld_industry: string[];

  constructor(private theme: NbThemeService) {
  }

  ngDoCheck() {
    const ls0 = localStorage.getItem('sta_by_enterprise_industry_dt');
    if (ls0 && ls0 === '1') {
      localStorage.setItem('sta_by_enterprise_industry_dt', '');
      const ls1 = localStorage.getItem('sta_by_enterprise_xssd_industry');
      // window.alert(ls1);
      const ls2 = localStorage.getItem('sta_by_enterprise_xsld_industry');
      // window.alert(ls2);
      this.xssd_industry = JSON.parse(ls1);
      this.xsld_industry = JSON.parse(ls2);
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        const colors = config.variables;
        const echarts: any = config.variables.echarts;

        this.options = {
          backgroundColor: echarts.bg,
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: this.xsld_industry,
            textStyle: {
              color: echarts.textColor,
            },
          },
          series: [
            {
              name: 'Countries',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: this.xssd_industry,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: echarts.itemHoverShadowColor,
                },
              },
              label: {
                normal: {
                  textStyle: {
                    color: echarts.textColor,
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: echarts.axisLineColor,
                  },
                },
              },
            },
          ],
        };
      });
    }
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
