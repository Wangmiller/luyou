import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxUploaderModule } from 'ngx-uploader';

import { AdamiyaComponent } from './adamiya.component'; // 导入刚才新建的模块

import { DataImportComponent } from './data_import';
import { DataImportService } from './data_import/data_import.service';

import { AdamiyaFavorListComponent } from './adamiya_favor_list';
import { AdamiyaFavorListService } from './adamiya_favor_list/adamiya_favor_list.service';

import { AllEnterpriseListComponent } from './all_enterprise_list';
import { AllEnterpriseListService } from './all_enterprise_list/all_enterprise_list.service';

import { EnterpriseEditComponent } from './enterprise_edit';
import { EnterpriseEditService } from './enterprise_edit/enterprise_edit.service';

import { AllFavorListComponent } from './all_favor_list';
import { AllFavorListService } from './all_favor_list/all_favor_list.service';

import { AllProjectListComponent } from '../_adamiya/all_project_list';
import { AllProjectListService } from '../_adamiya/all_project_list/all_project_list.service';

import { ProjectEditComponent } from './project_edit';
import { ProjectEditService } from './project_edit/project_edit.service';

import { AllProductListComponent } from '../_adamiya/all_product_list';
import { AllProductListService } from '../_adamiya/all_product_list/all_product_list.service';

import { ProductEditComponent } from './product_edit';
import { ProductEditService } from './product_edit/product_edit.service';

import { ProductDetailComponent } from './product_detail';
import { ProductDetailService } from './product_detail/product_detail.service';

import { UserEditComponent } from './user_edit';
import { UserEditService } from './user_edit/user_edit.service';

import { AllIndustryListComponent } from './all_industry_list';
import { AllIndustryListService } from './all_industry_list/all_industry_list.service';

import { AllSceneListComponent } from './all_scene_list';
import { AllSceneListService } from './all_scene_list/all_scene_list.service';

import { AllAdamiyaListComponent } from './all_adamiya_list';
import { AllAdamiyaListService } from './all_adamiya_list/all_adamiya_list.service';
import { AllLenovoListComponent } from './all_lenovo_list';
import { AllLenovoListService } from './all_lenovo_list/all_lenovo_list.service';
import { AllContactListComponent } from './all_contact_list';
import { AllContactListService } from './all_contact_list/all_contact_list.service';
import { AllUserListComponent } from './all_user_list';
import { AllUserListService } from './all_user_list/all_user_list.service';

import { AdamiyaEditComponent } from './adamiya_edit';
import { AdamiyaEditService } from './adamiya_edit/adamiya_edit.service';

import { KVListComponent } from './kv_list';
import { KVListService } from './kv_list/kv_list.service';

import { DicListComponent } from './dic_list';
import { DicListService } from './dic_list/dic_list.service';

import {STAByEnterpriseComponent} from './sta_by_enterprise';
import {STAByEnterpriseService} from './sta_by_enterprise/sta_by_enterprise.service';

import {STAByProductComponent} from './sta_by_product';
import {STAByProductService} from './sta_by_product/sta_by_product.service';

import { EchartsPieIndustryEnterpriseComponent } from './sta_by_enterprise/echarts-pie-industry-enterprise.component';
import { EchartsPieSceneEnterpriseComponent } from './sta_by_enterprise/echarts-pie-scene-enterprise.component';
import { EchartsAreaStackEnterpriseComponent } from './sta_by_enterprise/echarts-area-stack-enterprise.component';

import { EchartsPieIndustryProductComponent } from './sta_by_product/echarts-pie-industry-product.component';
import { EchartsPieSceneProductComponent } from './sta_by_product/echarts-pie-scene-product.component';
import { EchartsAreaStackProductComponent } from './sta_by_product/echarts-area-stack-product.component';

import { EchartsLineComponent } from './sta_by_enterprise/echarts-line.component';
import { EchartsBarComponent } from './sta_by_enterprise/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './sta_by_enterprise/echarts-multiple-xaxis.component';
import { EchartsBarAnimationComponent } from './sta_by_enterprise/echarts-bar-animation.component';
import { EchartsRadarComponent } from './sta_by_enterprise/echarts-radar.component';

import { UserEditBasicService } from '../_adamiya/user_edit_basic/user_edit_basic.service';
import { UserEditBasicComponent } from '../_adamiya/user_edit_basic';
import { DateRenderComponent } from '../_share/DateRender.component';
import { TFRenderComponent } from '../_share/TFRender.component';
import { RoutingAdamiya } from './adamiya.routing'; // 导入路由文件
import { AllPartnerListComponent } from '../_adamiya/all_partner_list';
import { AllPartnerListService } from '../_adamiya/all_partner_list/all_partner_list.service';
import { PartnerinfoComponent } from '../_adamiya/partner_info';
import { PartnereditComponent } from '../_adamiya/partner_edit';
import { PartnereditService } from '../_adamiya/partner_edit/partner_edit.service';
import { PartnerinfoService } from '../_adamiya/partner_info/partner_info.service';
import { DataCollectionListComponent } from '../_adamiya/data_collection_list';
import { DataCollectionListService } from '../_adamiya/data_collection_list/data_collection_list.service';
import { DataCollectionDetailService } from '../_adamiya/data_collection_detail/data_collection_detail.service';
import { DataCollectionDetailComponent } from '../_adamiya/data_collection_detail';

export class AppModule { }

@NgModule({
    imports: [
      CommonModule,
      RoutingAdamiya,
      Ng2SmartTableModule,
      ThemeModule,
      NgxEchartsModule,
      CKEditorModule,
      NgxUploaderModule,
    ],
    declarations: [
      UserEditBasicComponent,
      AdamiyaComponent,
      DataImportComponent,
      AllEnterpriseListComponent,
      AllFavorListComponent,
      AllProjectListComponent,
      AllProductListComponent,
      AllLenovoListComponent,
      AllContactListComponent,
      AllUserListComponent,
      UserEditComponent,
      ProjectEditComponent,
      ProductEditComponent,
      ProductDetailComponent,
      EnterpriseEditComponent,
      AllIndustryListComponent,
      AllSceneListComponent,
      AllAdamiyaListComponent,
      AdamiyaEditComponent,
      KVListComponent,
      DicListComponent,
      STAByEnterpriseComponent,
      STAByProductComponent,
      EchartsPieSceneEnterpriseComponent,
      EchartsPieIndustryEnterpriseComponent,
      EchartsPieSceneProductComponent,
      EchartsPieIndustryProductComponent,
      EchartsAreaStackEnterpriseComponent,
      EchartsAreaStackProductComponent,
      EchartsLineComponent,
      EchartsBarComponent,
      EchartsMultipleXaxisComponent,
      EchartsBarAnimationComponent,
      EchartsRadarComponent,
      AdamiyaFavorListComponent,
      DateRenderComponent,
      TFRenderComponent,
      AllPartnerListComponent,
      PartnerinfoComponent,
      PartnereditComponent,
      DataCollectionListComponent,
      DataCollectionDetailComponent,
    ],
    providers: [
      UserEditBasicService,
      AllEnterpriseListService,
      DataImportService,
      AllFavorListService,
      AllProjectListService,
      AllProductListService,
      AllUserListService,
      AllLenovoListService,
      AllContactListService,
      UserEditService,
      ProjectEditService,
      ProductEditService,
      ProductDetailService,
      EnterpriseEditService,
      AllIndustryListService,
      AllSceneListService,
      AllAdamiyaListService,
      AdamiyaEditService,
      KVListService,
      DicListService,
      STAByEnterpriseService,
      STAByProductService,
      AdamiyaFavorListService,
      AllPartnerListService,
      PartnerinfoService,
      PartnereditService,
      DataCollectionListService,
      DataCollectionDetailService,
    ],
    entryComponents:[
      DateRenderComponent,
      TFRenderComponent
    ]
})

export class AdamiyaModule {}
