import { Component } from '@angular/core';  // 导入angular核心模块

@Component({    // Component directive 声明组件属于 Component
  selector: 'ngx-adamiya', // 定义组件在HTML代码中匹配的标签
  template: `<router-outlet></router-outlet>`, // 指定组件关联的内联模板，这里直接使用一个路由插座
})

export class AdamiyaComponent {    // 导出模块，注意命名以 Component 结尾，方便区分
  constructor() {
    if (localStorage.getItem('ca_tsn') === 'master' || localStorage.getItem('ca_tsn') === 'sa') {
    }else {
      window.alert('对不起，您的角色不正确！请重新登录！');
      window.location.href = '#/auth_a/_auth_login/auth_login_a';
    }
  }
};
