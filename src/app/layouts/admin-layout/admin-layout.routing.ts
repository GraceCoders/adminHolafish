import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ResetPasswordComponent } from '../../reset-password/reset-password.component';
import { EditUserComponent } from '../../edit-user/edit-user.component';
import { ViewEventComponent } from '../../view-event/view-event.component';
import { VendorsListComponent } from '../../vendors-list/vendors-list.component';
import { UsersListComponent } from '../../users-list/users-list.component';
import { AuthGuardService } from '../../guards/auth-guard.service';
import { ProductsComponent } from '../../products/products.component';
import { ViewProductComponent } from '../../view-product/view-product.component';
import { BannerComponent } from '../../banner/banner.component';
import { NormalListComponent } from '../../normal-list/normal-list.component';
import { AuctionListComponent } from '../../auction-list/auction-list.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { OrdersListComponent } from '../../orders-list/orders-list.component';
import { AddProductComponent } from '../../add-product/add-product.component';
import { AdminProductsComponent } from '../../admin-products/admin-products.component';
import { OrderDetailsComponent } from '../../order-details/order-details.component';
import { AuctionWinnerComponent } from '../../auction-winner/auction-winner.component';
import { HelpandfeedbackComponent } from '../../helpandfeedback/helpandfeedback.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent ,canActivate: [AuthGuardService]},
    { path: 'reset-password', component: ResetPasswordComponent, canActivate:[AuthGuardService]},
    { path: 'users',          component: UsersListComponent, canActivate:[AuthGuardService]},
    { path: 'banners',          component: BannerComponent, canActivate:[AuthGuardService]},
    { path: 'edit-user',      component:EditUserComponent, canActivate:[AuthGuardService]},
    { path: 'view-event',     component: ViewEventComponent, canActivate:[AuthGuardService]},  
    { path: 'providers', component: VendorsListComponent, canActivate:[AuthGuardService]}, 
    { path: 'products', component: ProductsComponent, canActivate:[AuthGuardService]},
    { path: 'view-product',      component: ViewProductComponent,canActivate:[AuthGuardService]},
    {path:'normal-list',    component:NormalListComponent,canActivate:[AuthGuardService]},
    {path:'auction-list',   component:AuctionListComponent,canActivate:[AuthGuardService]},
    {path:'product-detail',   component:ProductDetailComponent,canActivate:[AuthGuardService]},
    {path:'orders-list',    component:OrdersListComponent,canActivate:[AuthGuardService]},
    {path:'order-details',  component:OrderDetailsComponent,canActivate:[AuthGuardService]},
    {path:'add-product',    component:AddProductComponent,canActivate:[AuthGuardService]},
    {path:'admin-products', component:AdminProductsComponent,canActivate:[AuthGuardService]},
    {path:'auction-winner',component:AuctionWinnerComponent,canActivate:[AuthGuardService]},
    {path:'helpandfeedback',component:HelpandfeedbackComponent,canActivate:[AuthGuardService]},
    { path: '**',redirectTo: ''}
];


