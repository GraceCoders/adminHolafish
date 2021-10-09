import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/users', title: 'Users',  icon: 'users_single-02', class: '' },
    { path: '/providers', title: 'vendors',  icon: 'transportation_bus-front-12', class: '' },
    { path: '/banners', title: 'banners',  icon: 'files_paper', class: '' },
     { path: '/normal-list', title: 'Normal',  icon:'shopping_shop', class: '' },
     { path: '/auction-list', title: 'Auction',  icon:'shopping_delivery-fast', class: '' },
     {path: '/orders-list', title: 'Orders',icon : 'shopping_bag-16',class:''},
     {path: '/admin-products', title : 'Admin Products', icon: 'tech_laptop',class:''},
     {path:'/auction-winner',title:'Auction Winner',icon:'sport_trophy',class:''},
     {path:'/helpandfeedback',title:'Help & FeedBack',icon:'emoticons_satisfied',class:''}

    //  { path: '/subcategories', title: 'Subcategories',  icon:'design_bullet-list-67', class: '' },
    //  { path: '/user-messages', title: 'Messages',  icon:'design_bullet-list-67', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isToggle = true;
  sideClass = ''
  width = 260;
  menuItems: any[];
  username;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.username = localStorage.getItem('name');
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
  
  openNav(){
  console.log("ndaubuhdubauduashu")
  this.isToggle = this.isToggle == true ? this.isToggle = false : this.isToggle = true;
  this.width = this.width == 260 ? this.width = 0 : this.width = 260; 
  this.sideClass = this.sideClass == '' ? this.sideClass = 'sidebarClass' : this.sideClass = '';
  document.getElementById("mySidepanel").style.width = `${this.width}px`;
  }
  
}
