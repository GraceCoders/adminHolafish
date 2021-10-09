import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ViewEventComponent } from './../../view-event/view-event.component';
import { ChartsModule } from 'ng2-charts';

import { EditUserComponent } from '../../edit-user/edit-user.component';
import { UsersListComponent } from '../../users-list/users-list.component';
import { ResetPasswordComponent } from '../../reset-password/reset-password.component';
import { VendorsListComponent } from '../../vendors-list/vendors-list.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from '../../products/products.component';
import { ViewProductComponent } from '../../view-product/view-product.component';
import { BannerComponent } from '../../banner/banner.component';
import { DateTimePickerModule} from 'ngx-datetime-picker';
import { NormalListComponent } from '../../normal-list/normal-list.component';
import { AuctionListComponent } from '../../auction-list/auction-list.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { OrdersListComponent } from '../../orders-list/orders-list.component';
import { AddProductComponent } from '../../add-product/add-product.component';
import { AdminProductsComponent } from '../../admin-products/admin-products.component';
import { OrderDetailsComponent } from '../../order-details/order-details.component';
import { AuctionWinnerComponent } from '../../auction-winner/auction-winner.component';
import { HelpandfeedbackComponent } from '../../helpandfeedback/helpandfeedback.component';
 

@NgModule({
  imports: [
    CommonModule,
    AmazingTimePickerModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    CKEditorModule,
    DateTimePickerModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    ViewEventComponent,
    ResetPasswordComponent,
    EditUserComponent,
    VendorsListComponent,
    UsersListComponent,
    ProductsComponent,
    BannerComponent,
    ViewProductComponent,
    NormalListComponent,
    AuctionListComponent,
    ProductDetailComponent,
    OrdersListComponent,
    AddProductComponent,
    AdminProductsComponent,
    OrderDetailsComponent,
    AuctionWinnerComponent,
    HelpandfeedbackComponent
  ]
})

export class AdminLayoutModule {}
