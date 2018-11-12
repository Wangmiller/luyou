import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { ShareComponent } from './share.component'; // 导入刚才新建的模块

import { EnterpriseListService } from './enterprise_list/enterprise_list.service';
import { UserEnterpriseListService } from './user_enterprise_list/user_enterprise_list.service';
import { RecycleListService } from './recycle_list/recycle_list.service';
import { EnterpriseDetailService } from './enterprise_detail/enterprise_detail.service';
import { ProductCompareService } from './product_compare/product_compare.service';
import { ProductListService } from './product_list/product_list.service';
import { UserProductListService } from './user_product_list/user_product_list.service';
import { ProductDetailService } from './product_detail/product_detail.service';
import { UserDetailService } from './user_detail/user_detail.service';
import { SetPasswordService } from './set_password/set_password.service';
import { UserFavorListService } from './user_favor_list/user_favor_list.service';
import { ProjectListService } from './project_list/project_list.service';
import { UserProjectListService } from './user_project_list/user_project_list.service';
import { ProjectDetailService } from './project_detail/project_detail.service';
import { ProductEditService } from './product_edit/product_edit.service';
import { EnterpriseEditService } from './enterprise_edit/enterprise_edit.service';
import { ProjectEditService } from './project_edit/project_edit.service';
import { UserEditService } from './user_edit/user_edit.service';

import { EnterpriseListComponent } from './enterprise_list';
import { UserEnterpriseListComponent } from './user_enterprise_list';
import { RecycleListComponent } from './recycle_list';
import { EnterpriseDetailComponent } from './enterprise_detail';
import { ProductListComponent } from './product_list';
import { UserProductListComponent } from './user_product_list';
import { ProductCompareComponent } from './product_compare';
import { ProductDetailComponent } from './product_detail';
import { ProjectDetailComponent } from './project_detail';
import { UserDetailComponent } from './user_detail';
import { SetPasswordComponent } from './set_password';
import { UserFavorListComponent } from './user_favor_list';
import { ProjectListComponent } from './project_list';
import { UserProjectListComponent } from './user_project_list';
import { ProductEditComponent } from './product_edit';
import { EnterpriseEditComponent } from './enterprise_edit';
import { ProjectEditComponent } from './project_edit';
import { UserEditComponent } from './user_edit';
import { DateRenderComponent } from './DateRender.component';

import { RoutingShare } from './share.routing'; // 导入路由文件

@NgModule({
  imports: [
    CommonModule,
    RoutingShare,
    Ng2SmartTableModule,
    ThemeModule,
    CKEditorModule,
  ],
  declarations: [
    ShareComponent,
    UserEditComponent,
    UserDetailComponent,
    UserProductListComponent,
    UserProjectListComponent,
    UserFavorListComponent,
    UserEnterpriseListComponent,
    ProductCompareComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProjectEditComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    EnterpriseListComponent,
    EnterpriseEditComponent,
    EnterpriseDetailComponent,
    RecycleListComponent,
    SetPasswordComponent,
    //DateRenderComponent,
  ],
  providers: [
    ProductCompareService,
    ProductEditService,
    EnterpriseEditService,
    ProjectEditService,
    UserEditService,
    RecycleListService,
    SetPasswordService,
    UserFavorListService,
    ProjectListService,
    UserProjectListService,
    EnterpriseListService,
    UserEnterpriseListService,
    EnterpriseDetailService,
    ProductListService,
    UserProductListService,
    ProductDetailService,
    UserDetailService,
    ProjectDetailService,
  ],
})

export class ShareModule { }
