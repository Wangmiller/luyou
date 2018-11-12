import { Component } from '@angular/core';  // 导入angular核心模块

@Component({    // Component directive 声明组件属于 Component
    selector: 'ngx-auth-login', // 定义组件在HTML代码中匹配的标签
    template: `<router-outlet></router-outlet>`, // 指定组件关联的内联模板，这里直接使用一个路由插座
})

export class AuthLoginComponent {    // 导出模块，注意命名以 Component 结尾，方便区分
    constructor() { }
};
