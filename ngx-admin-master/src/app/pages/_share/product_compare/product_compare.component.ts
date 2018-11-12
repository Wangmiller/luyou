import {Component, DoCheck} from '@angular/core';
import {ProductCompareService} from './product_compare.service';
import {XProductCompare} from '../../@xmodel/XProductCompare';

@Component({
  selector: 'ngx-share-product-compare',
  templateUrl: './product_compare.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class ProductCompareComponent implements DoCheck {

  settings = {
    pager: {
      display: false,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      compare_item: {
        title: '对比项目',
        editable: false,
        type: 'string',
        filter: false,
      },
      p01: {
        title: '对比产品01',
        editable: false,
        type: 'string',
        filter: false,
      },
      p02: {
        title: '对比产品02',
        editable: false,
        type: 'string',
        filter: false,
      },
      p03: {
        title: '对比产品03',
        editable: false,
        type: 'string',
        filter: false,
      },
      p04: {
        title: '对比产品04',
        editable: false,
        type: 'string',
        filter: false,
      },
      p05: {
        title: '对比产品05',
        editable: false,
        type: 'string',
        filter: false,
      },
      p06: {
        title: '对比产品06',
        editable: false,
        type: 'string',
        filter: false,
      },
      p07: {
        title: '对比产品07',
        editable: false,
        type: 'string',
        filter: false,
      },
      p08: {
        title: '对比产品08',
        editable: false,
        type: 'string',
        filter: false,
      },
      p09: {
        title: '对比产品09',
        editable: false,
        type: 'string',
        filter: false,
      },
    },
  };

  xs: XProductCompare[];

  constructor(private service: ProductCompareService) {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      localStorage.setItem(cusn + '_product_compare_dt', '1');
    }
  }

  ngDoCheck() {
    const cusn = localStorage.getItem('cu_sn');
    if (cusn && cusn !== '') {
      const ls0 = localStorage.getItem(cusn + '_product_compare_dt');
      if (ls0 && ls0 === '1') {
        localStorage.setItem(cusn + '_product_compare_dt', '');
        const ls1 = localStorage.getItem(cusn + '_product_compare');
        this.xs = JSON.parse(ls1);
      }
    }
  }

  private handleError(error: any) {
    console.error('对不起' + error);
  }

  deleteD(event): void {
    if (window.confirm('确定要清空对比吗？')) {
      this.service.deleteD();
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
