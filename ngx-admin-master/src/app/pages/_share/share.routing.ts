import { Routes, RouterModule } from '@angular/router';

import { ShareComponent } from './share.component'; // 导入刚才新建的模块

import { EnterpriseListComponent } from './enterprise_list'
import { EnterpriseDetailComponent } from './enterprise_detail'
import { EnterpriseEditComponent } from './enterprise_edit'
import { UserEnterpriseListComponent } from './user_enterprise_list'
import { ProductCompareComponent } from './product_compare'
import { ProductListComponent } from './product_list'
import { ProductDetailComponent } from './product_detail'
import { ProductEditComponent } from './product_edit'
import { UserProductListComponent } from './user_product_list'
import { ProjectListComponent } from './project_list'
import { ProjectDetailComponent } from './project_detail'
import { ProjectEditComponent } from './project_edit'
import { UserProjectListComponent } from './user_project_list'
import { UserDetailComponent } from './user_detail'
import { UserEditComponent } from './user_edit'
import { UserFavorListComponent } from './user_favor_list'
import { SetPasswordComponent } from './set_password'
import { RecycleListComponent } from './recycle_list';

const routes: Routes = [
    {
        path: '',
        component: ShareComponent,
        children: [
          {
            path: 'recycle_list/:en',
            component: RecycleListComponent,
          },
          {
            path: 'enterprise_list',
            component: EnterpriseListComponent,
          },
          {
            path: 'enterprise_detail/:sn',
            component: EnterpriseDetailComponent,
          },
          {
            path: 'enterprise_edit/:sn',
            component: EnterpriseEditComponent,
          },
          {
            path: 'product_list',
            component: ProductListComponent,
          },
          {
            path: 'project_list',
            component: ProjectListComponent,
          },
          {
            path: 'user_enterprise_list',
            component: UserEnterpriseListComponent,
          },
          {
            path: 'user_product_list',
            component: UserProductListComponent,
          },
          {
            path: 'user_project_list',
            component: UserProjectListComponent,
          },
          {
            path: 'product_detail/:sn',
            component: ProductDetailComponent,
          },
          {
            path: 'product_edit/:sn',
            component: ProductEditComponent,
          },
          {
            path: 'project_detail/:sn',
            component: ProjectDetailComponent,
          },
          {
            path: 'product_compare',
            component: ProductCompareComponent,
          },
          {
            path: 'project_edit/:sn',
            component: ProjectEditComponent,
          },
          {
            path: 'user_detail/:sn',
            component: UserDetailComponent,
          },
          {
            path: 'user_edit/:sn',
            component: UserEditComponent,
          },
          {
            path: 'set_password',
            component: SetPasswordComponent,
          },
          {
            path: 'user_favor_list',
            component: UserFavorListComponent,
          },
        ],
    },
];
export const RoutingShare = RouterModule.forChild(routes);
