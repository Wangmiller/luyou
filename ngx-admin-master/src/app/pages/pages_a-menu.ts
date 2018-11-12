import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_A: NbMenuItem[] = [
  {
    title: '管理首页',
    icon: 'nb-home',
    link: '/pages_a/master',
    home: true,
  },
  {
    title: '企业管理',
    icon: 'nb-keypad',
    children: [
      {
        title: '企业列表',
        link: '/pages_a/_adamiya/all_enterprise_list',
      },

    ],
  },
  {
      title: '合作伙伴管理',
      icon: 'nb-keypad',
      children: [
          {
              title: '合作伙伴列表',
              link: '/pages_a/_adamiya/all_partner_list',
          },

      ],
  },
  {
    title: '产品管理',
    icon: 'nb-keypad',
    children: [
      {
        title: '产品列表',
        link: '/pages_a/_adamiya/all_product_list',
      },
      {
        title: '产品统计',
        link: '/pages_a/_adamiya/sta_by_product',
      },
      {
        title: '收藏夹',
        link: '/pages_a/_adamiya/adamiya_favor_list',
      },

      {
        title: '产品对比',
        link: '/pages_a/_share/product_compare',
      },

    ],
  },
  {
    title: '账号管理',
    icon: 'nb-keypad',
    children: [
      {
        title: '普通用户列表',
        link: '/pages_a/_adamiya/all_user_list',
      },
      {
        title: '联想负责人列表',
        link: '/pages_a/_adamiya/all_lenovo_list',
      },
      {
        title: '联系人列表',
        link: '/pages_a/_adamiya/all_contact_list',
      },
      {
        title: '管理员列表',
        link: '/pages_a/_adamiya/all_adamiya_list',
      },

    ],
  },
  // {
  //   title: '项目管理',
  //   icon: 'nb-keypad',
  //   children: [
  //     {
  //       title: '项目列表',
  //       link: '/pages_a/_adamiya/all_project_list',
  //     },
  //     {
  //       title: '项目类型',
  //       link: '/pages_a/_adamiya/kv_list/project_type',
  //     },
  //     {
  //       title: '项目等级',
  //       link: '/pages_a/_adamiya/kv_list/project_level',
  //     },
  //     {
  //       title: '项目状态',
  //       link: '/pages_a/_adamiya/kv_list/project_status',
  //     },
  //   ],
  // },
  {
    title: '配置管理',
    icon: 'nb-keypad',
    children: [
      {
        title: '行业',
        link: '/pages_a/_adamiya/all_industry_list',
      },
      {
        title: '场景',
        link: '/pages_a/_adamiya/all_scene_list',
      },
      // {
      //   title: '通用字典',
      //   link: '/pages_a/_adamiya/dic_list',
      // },
      {
        title: '数据导入',
        link: '/pages_a/_adamiya/data_import',
      },
      {
        title: '企业类型',
        link: '/pages_a/_adamiya/kv_list/enterprise_type',
      },
      {
        title: '企业等级',
        link: '/pages_a/_adamiya/kv_list/enterprise_level',
      },
      {
        title: '企业状态',
        link: '/pages_a/_adamiya/kv_list/enterprise_status',
      },
      {
        title: '产品类型',
        link: '/pages_a/_adamiya/kv_list/product_type',
      },
      {
        title: '产品成熟等级',
        link: '/pages_a/_adamiya/kv_list/product_level',
      },
      {
        title: '产品对接状态',
        link: '/pages_a/_adamiya/kv_list/product_status',
      },
      {
        title: '用户等级配置',
        link: '/pages_a/_adamiya/kv_list/user_level',
      },
      {
        title: '用户状态配置',
        link: '/pages_a/_adamiya/kv_list/user_status',
      },
      {
        title: '全部被收藏的产品',
        link: '/pages_a/_adamiya/all_favor_list',
      },
    ],
  },
      {
        title: '数据采集管理',
        icon: 'nb-keypad',
        children: [
            {
                title: '数据采集列表',
                link: '/pages_a/_adamiya/data_collection_list',
            },
        ],
    },
  // {
  //   title: '统计分析',
  //   icon: 'ion-android-bar',
  //   children: [
  //     {
  //       title: '按企业',
  //       link: '/pages_a/_adamiya/sta_by_enterprise',
  //     },
  //     {
  //       title: '按产品',
  //       link: '/pages_a/_adamiya/sta_by_product',
  //     },
  //   ],
  // },
  {
    title: '回收站',
    icon: 'nb-trash',
    children: [
      {
        title: '已删企业',
        link: '/pages_a/_share/recycle_list/enterprise_info',
      },
      {
        title: '已删产品',
        link: '/pages_a/_share/recycle_list/product_info',
      },
      {
        title: '已删场景',
        link: '/pages_a/_share/recycle_list/scene_info',
      },
      {
        title: '已删行业',
        link: '/pages_a/_share/recycle_list/industry_info',
      },
      {
        title: '已删管理员',
        link: '/pages_a/_share/recycle_list/master_info',
      },
      {
        title: '已删用户',
        link: '/pages_a/_share/recycle_list/user_info',
      },
    ],
  },
  {
    title: '设置',
    icon: 'nb-gear',
    children: [
      {
        title: '修改密码',
        link: '/pages_a/_share/set_password',
      },
      {
        title: '注销',
        link: '/auth_a/_auth_login/a_logout',
      },
    ],
  }, {
    title: 'VERSION 2.0 BETA',
    group: true,
  },
];
