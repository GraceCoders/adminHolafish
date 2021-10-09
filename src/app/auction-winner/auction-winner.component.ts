import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-auction-winner',
  templateUrl: './auction-winner.component.html',
  styleUrls: ['./auction-winner.component.scss']
})
export class AuctionWinnerComponent implements OnInit {

  // products = [{userName:'sandeep',mobile:9815498454,productName:'product 1',quantity:10,price:100,dateTime:new Date(),vendorName:'seller1'},
  // {userName:'sandeep',mobile:9815498454,productName:'product 2',quantity:10,price:100,dateTime:new Date(),vendorName:'seller2'},
  // {userName:'sandeep',mobile:9815498454,productName:'product 2',quantity:10,price:100,dateTime:new Date(),vendorName:'seller2'}];

  products = [];

 size = ''
 pagination = false;
 total = 0;
  data = {
    page : 1,
    limit: '',
    text: '',
    vendorId: '',
    userType:'vendor'
  }
  where = {
    filter: '',
		limit: 10,
    page: 1,
    order: -1
	}

  constructor( private router: Router, 
              private route: ActivatedRoute,
               private userService: AppService,
               private spinner: NgxSpinnerService) { }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  ngOnInit() {
    
    this.getAuctionWinnerList(this.data)
  }

  getAuctionWinnerList(data){
    this.spinner.show();
    this.userService.getBidListing(data).subscribe((data)=>{
      debugger
      this.spinner.hide();
      if(data.statusCode == 200){
        this.products = data.data.bids;
        // this.products[this.products.length].push()
        this.total = data.data.total
      }
    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
  }

  

}
