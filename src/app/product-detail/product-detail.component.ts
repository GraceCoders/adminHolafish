import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  editProductForm: FormGroup;
  event_id;
  tickets = [];
  details;
  formData = new FormData();
  isImageOne = false;
  isImageTwo = false;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private spinner: NgxSpinnerService,
    private userService: AppService) { }

  ngOnInit() {
    this.spinner.show();
    this.route.queryParams.subscribe(params => { 
      this.userService.getProductById2({productId:params.productId}).subscribe((data)=>{
        if(data.statusCode == 200){
          this.details = data.data;
          this.spinner.hide();
        }
      },
      (err)=>{
       console.log(err);
       this.spinner.hide();
      })
    });
  }
  
  allProducts(vendorId){
    this.router.navigate(['products'], { queryParams: { vendorId: vendorId } });
  }

}
