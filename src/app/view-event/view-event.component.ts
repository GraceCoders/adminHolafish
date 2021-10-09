import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {
  editProductForm: FormGroup;
  event_id;
  tickets = [];
  vendor;
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
      this.userService.getVendorById({vendorId:params.vendorId}).subscribe((data)=>{
        if(data.statusCode == 200){
          this.vendor = data.data;
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
