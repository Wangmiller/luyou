import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_U: NbMenuItem[] = [
  {
    title: '个人首页',
    icon: 'nb-home',
    link: '/pages_u/user',
    home: true,
  }, {
    title: '我的资料',
    icon: 'nb-keypad',
    children: [
      {
        title: '我的企业',
        link: '/pages_u/_share/user_enterprise_list',
      },
      {
        title: '我的产品',
        link: '/pages_u/_share/user_product_list',
      },
      {
        title: '我的项目',
        link: '/pages_u/_share/user_project_list',
      },
      {
        title: '我的收藏夹',
        link: '/pages_u/_share/user_favor_list',
      },
      {
        title: '产品对比',
        link: '/pages_u/_share/product_compare',
      },
    ],
  },  {
    title: '平台检索',
    icon: 'nb-keypad',
    children: [
      {
        title: '找企业',
        link: '/pages_u/_share/enterprise_list',
      },
      {
        title: '找产品',
        link: '/pages_u/_share/product_list',
      },
      {
        title: '找项目',
        link: '/pages_u/_share/project_list',
      },
    ],
  }, {
    title: '设置',
    icon: 'nb-keypad',
    children: [
      {
        title: '修改密码',
        link: '/pages_u/_share/set_password',
      },
      {
        title: '注销',
        link: '/auth_u/_auth_login/u_logout',
      },
    ],
  }, {
    title: 'VERSION 2.0 BETA',
    group: true,
  },
];
