import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

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
      this.userService.getAdminProductDetail({orderId:params.orderId}).subscribe((data)=>{
        debugger
        if(data.statusCode == 200){
          this.details = data.data;
          
        }
        this.spinner.hide();
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
