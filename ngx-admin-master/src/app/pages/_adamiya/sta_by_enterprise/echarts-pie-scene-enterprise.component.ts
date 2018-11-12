import { DoCheck, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {XSTAPieSeriesData} from '../../@xmodel/XSTAPieSeriesData'

@Component({
  selector: 'ngx-echarts-pie-scene-enterprise',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieSceneEnterpriseComponent implements DoCheck, OnDestroy {
  options: any = {};
  themeSubscription: any;
  xssd_scene: XSTAPieSeriesData[];
  xsld_scene: string[];

  constructor(private theme: NbThemeService) {
  }

  ngDoCheck() {
    const ls0 = localStorage.getItem('sta_by_enterprise_scene_dt');
    if (ls0 && ls0 === '1') {
      localStorage.setItem('sta_by_enterprise_scene_dt', '');
      const ls1 = localStorage.getItem('sta_by_enterprise_xssd_scene');
      // window.alert(ls1);
      const ls2 = localStorage.getItem('sta_by_enterprise_xsld_scene');
      // window.alert(ls2 + 's');
      this.xssd_scene = JSON.parse(ls1);
      this.xsld_scene = JSON.parse(ls2);
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
            data: this.xsld_scene,
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
              data: this.xssd_scene,
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
