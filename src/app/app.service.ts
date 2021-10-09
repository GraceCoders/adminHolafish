import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService { 
  baseUrl = "http://5.183.11.242:5004/api/v1/"; 
  // baseUrl = "http://127.0.0.1:5004/api/v1/"; 
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': `Bearer ${localStorage.getItem('token')}`
    })
  }
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(){
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
  }

  login(data: any): Observable<any> {
    let url = this.baseUrl.concat('admin/login');
    return this.http.post(url,data);
  }


  addAuctionProduct(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('admin/product/add');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }


  addProvider(data):  Observable<any>{
    // this.authenticate();
    let url = this.baseUrl.concat('vendor/register');
    data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  updateProvider(data):  Observable<any>{
    // this.authenticate();
    console.log("=== check updatte provider ====")
    let url = this.baseUrl.concat('provider/update');
    data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  updateProduct(data):  Observable<any>{
    // this.authenticate();
    console.log("=== check updatte provider ====")
    let url = this.baseUrl.concat('admin/product/add');
    data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  addProduct(data):  Observable<any>{
    // this.authenticate();
    console.log("=== check updatte provider ====")
    let url = this.baseUrl.concat('product/add');
    data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  getProviders(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('admin/vendor/all');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  getProducts(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('vendor/all/product');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  getBidListing(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('user/bid/admin/list');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  getProviderById(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
   let url = this.baseUrl.concat('provider/detail');
    return this.http.post(url,data);
  }

  getProductById(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
   let url = this.baseUrl.concat('product/detail');
    return this.http.post(url,data);
  }

  getProductById2(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
   let url = this.baseUrl.concat('admin/product/detail');
    return this.http.post(url,data);
  }

  getAdminProductDetail(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
   let url = this.baseUrl.concat('user/order/admin/detail');
    return this.http.post(url,data);
  }

  


  getVendorById(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
   let url = this.baseUrl.concat('vendor/detail');
    return this.http.post(url,data);
  }

  deleteProvider(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('provider/remove');
    return this.http.post(url,data);
  }

  changeOrderStatus(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('user/order/admin/rejectOraccept');
    return this.http.post(url,data);
  }

  forgotPassword(data):  Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('forgot-password');
    return this.http.post(url,data);
  }

  getUsers(data):Observable<any> {
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('admin/user/list');
    return this.http.post(url,data);
  } 

  
  deleteUser(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('admin/user/remove');
    return this.http.post(url,data);
  }



  changePassword(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('change-password');
    return this.http.post(url,data);
  }

  editProfile(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('admin/resetpassword');
    return this.http.post(url,data);
  }


  getUser(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('admin/user/detail');
    return this.http.post(url,data);
  }

  updateUser(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('admin/user/update');
    return this.http.post(url,data);
  }

  dashboardCount(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat(`admin/dashboard/all`);
    return this.http.post(url,data);
  }

  addBanner(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat(`admin/banner/add`);
    return this.http.post(url,data);
  }
 
  getbanners(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat(`admin/banner/list`);
    return this.http.post(url,data);
  }
  
  deleteBanner(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat(`admin/banner/remove`);
    return this.http.post(url,data);
  }

  getNormalProducts(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('admin/product/normal');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  getAuctionProucts(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('admin/product/auction');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  getOrdersListForAdmin(data): Observable<any>{
    this.authenticate();
   let url = this.baseUrl.concat('user/order/admin/list');
   data.token = `Bearer ${localStorage.getItem('token')}`;
    return this.http.post(url,data);
  }

  logout(data): Observable<any>{
    this.authenticate();
    data.token = `Bearer ${localStorage.getItem('token')}`;
    let url = this.baseUrl.concat('user/logout');
    return this.http.post(url,data);
  }

}
