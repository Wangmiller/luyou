import { Routes, RouterModule } from '@angular/router';

import { AdamiyaComponent } from './adamiya.component'; // 导入刚才新建的模块

import { AllEnterpriseListComponent } from './all_enterprise_list'
import { AllPartnerListComponent } from './all_partner_list'
import { AllFavorListComponent } from './all_favor_list'
import { AllProjectListComponent } from './all_project_list'
import { AllProductListComponent } from './all_product_list'
import { AllUserListComponent } from './all_user_list'
import { AllLenovoListComponent } from './all_lenovo_list'
import { AllContactListComponent } from './all_contact_list'
import { UserEditComponent } from './user_edit'
import { AllIndustryListComponent } from './all_industry_list'
import { AllSceneListComponent } from './all_scene_list'
import { AllAdamiyaListComponent } from './all_adamiya_list'
import { AdamiyaEditComponent } from './adamiya_edit'
import { DataImportComponent } from './data_import'
import { KVListComponent } from './kv_list'
import { DicListComponent } from './dic_list'
import { STAByEnterpriseComponent } from './sta_by_enterprise'
import { STAByProductComponent } from './sta_by_product'
import { ProductEditComponent } from './product_edit';
import { ProjectEditComponent } from './project_edit';
import { EnterpriseEditComponent } from './enterprise_edit';
import { ProductDetailComponent } from './product_detail';
import { AdamiyaFavorListComponent } from './adamiya_favor_list';
import { UserEditBasicComponent } from '../_adamiya/user_edit_basic';
import { DataCollectionListComponent } from '../_adamiya/data_collection_list'
import { DataCollectionDetailComponent } from '../_adamiya/data_collection_detail'
import {PartnerinfoComponent} from '../_adamiya/partner_info';
import {PartnereditComponent} from '../_adamiya/partner_edit';


const routes: Routes = [
    {
        path: '',
        component: AdamiyaComponent,
        children: [
          {
            path: 'all_enterprise_list',
            component: AllEnterpriseListComponent,
          },
          {
              path: 'all_partner_list',
              component: AllPartnerListComponent,
          },
          {
              path: 'partner_add',
              component: PartnerinfoComponent,
          },
          {
              path: 'partner_info/:sn',
              component: PartnerinfoComponent,
          },
          {
              path: 'partner_edit/:sn',
              component: PartnerinfoComponent,
          },
          {
            path: 'all_favor_list',
            component: AllFavorListComponent,
          },
          {
            path: 'adamiya_favor_list',
            component: AdamiyaFavorListComponent,
          },
          {
            path: 'all_project_list',
            component: AllProjectListComponent,
          },
          {
            path: 'all_product_list',
            component: AllProductListComponent,
          },
          {
            path: 'all_user_list',
            component: AllUserListComponent,
          },
          {
            path: 'all_lenovo_list',
            component: AllLenovoListComponent,
          },
          {
            path: 'all_contact_list',
            component: AllContactListComponent,
          },
          {
            path: 'user_edit_basic/:sn',
            component: UserEditBasicComponent,
          },
          {
            path: 'user_edit/:sn',
            component: UserEditComponent,
          },
          {
            path: 'product_edit/:sn',
            component: ProductEditComponent,
          },
          {
            path: 'project_edit/:sn',
            component: ProjectEditComponent,
          },
          {
            path: 'product_detail/:sn',
            component: ProductDetailComponent,
          },
          {
            path: 'enterprise_edit/:sn',
            component: EnterpriseEditComponent,
          },
          {
            path: 'all_industry_list',
            component: AllIndustryListComponent,
          },
          {
            path: 'all_scene_list',
            component: AllSceneListComponent,
          },
          {
            path: 'all_adamiya_list',
            component: AllAdamiyaListComponent,
          },
          {
            path: 'data_import',
            component: DataImportComponent,
          },
          {
            path: 'adamiya_edit/:sn',
            component: AdamiyaEditComponent,
          },
          {
            path: 'kv_list/:en',
            component: KVListComponent,
          },
          {
            path: 'dic_list',
            component: DicListComponent,
          },
          {
            path: 'sta_by_enterprise',
            component: STAByEnterpriseComponent,
          },
          {
            path: 'sta_by_product',
            component: STAByProductComponent,
          },
          {
              path: 'data_collection_list',
              component: DataCollectionListComponent,
          },
          {
              path: 'data_collection_detail/:sn',
              component: DataCollectionDetailComponent,
          },
          {
            path: 'data_collection_list',
            component: DataCollectionListComponent,
          },
          {
            path: 'data_collection_detail/:title',
            component: DataCollectionDetailComponent,
          },
          {
            path: 'data_collection_list',
            component: DataCollectionListComponent,
          },
          {
            path: 'data_collection_detail/:product_name',
            component: DataCollectionDetailComponent,
          },
        ],
    },
];
export const RoutingAdamiya = RouterModule.forChild(routes);
