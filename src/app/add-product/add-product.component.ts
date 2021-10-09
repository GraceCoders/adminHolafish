import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product;
  public Editor = ClassicEditor;
  editProductForm: FormGroup;
  selectedDate = new Date();
  status;
  errMessage = false;
  isImageOne = false;
  isImageTwo = false;
  auctionError = false;
  auctionMSg = " ";
  msg = "";
  submitted = false;
  des_msg = false;
  coverimage = false;
  image = false;
  type;
  normal = false;
  auction = false;
  orderPlaced;
  coverimage_error_msg = '';
  urls_imageTwo =[];
  urls_imageOne = [];
  image_error_msg = '';
  error_msg = '';
  error = false;
  productId;
  vendorId;
  formData = new FormData();
  addProductForm: FormGroup;
  dateTimeExample = new Date();

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
     private router: Router, 
     private userService: AppService,
     private spinner: NgxSpinnerService
     ) { }

     ngAfterViewInit() {
      let top = document.getElementById('top');
      if (top !== null) {
        top.scrollIntoView();
        top = null;
      }
    }

  ngOnInit() {
    this.editProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [''],
      quantity: ['', Validators.required],
      size: ['MEDIUM', Validators.required],
      scheduleTime:[new Date()],
      duration:[1],
      imageOne: ['',[Validators.required]],
      imageTwo: ['',[Validators.required]],
      description: ['', Validators.required],
      minimumPrice:[''],
      maximumPrice:[''],
      cleaningFish:[''],
      userType:[''],
    });

    this.route.queryParams.subscribe(params => {
      this.userService.getProductById({productId:params.productId}).subscribe((data)=>{
        // this.spinner.show();
        if(data.statusCode == 200){
          this.product= data.data;
          console.log("==check producyt====",this.product)
          this.productId = params.productId;
          this.orderPlaced = this.product.orderPlaced;
          this.vendorId = localStorage.userId;
          this.type = params.type;
          this.urls_imageTwo = [];
          this.urls_imageTwo.push(data.data.imageTwo);
          this.urls_imageOne = [];
          this.urls_imageOne.push(data.data.imageOne);
          this.editProductForm.patchValue(data.data);
          if(this.type == "normal"){
            this.auction = false;
          }else{
            this.auction = true
          }
          // this.spinner.hide();
        }
      },
      (err)=>{
       console.log(err);
       this.spinner.hide();
      })
    });
  }
  
  fileUploadImageTwo(event) {
    let files = event.target.files;
    this.isImageTwo = true;
    this.urls_imageTwo = [];
    if (files) {
      for (let file of files) {
        var ext = file.name.match(/\.(.+)$/)[1];
        if (ext.toLowerCase() === 'jpg' ||
          ext.toLowerCase() === 'jpeg' ||
          ext.toLowerCase() === 'png' ||
          ext.toLowerCase() === 'webp') {
            let reader = new FileReader();
            reader.onload = (e: any) => {
              this.urls_imageTwo.push(e.target.result);
            }
            reader.readAsDataURL(file);
          this.formData.set('imageTwo', file, file.name);
          this.editProductForm.controls["imageTwo"].setValue(file.name);
        }

      }
    }else{
      this.urls_imageTwo.push('../../assets/img/4-3.png');
    }

  }


  fileUploadImageOne(event) {
    let files = event.target.files;
    this.isImageOne = true;
    this.urls_imageOne = [];
    if (files) {
      for (let file of files) {
        var ext = file.name.match(/\.(.+)$/)[1];
        if (ext.toLowerCase() === 'jpg' ||
          ext.toLowerCase() === 'jpeg' ||
          ext.toLowerCase() === 'png' ||
          ext.toLowerCase() === 'webp') {
            let reader = new FileReader();
            reader.onload = (e: any) => {
              this.urls_imageOne.push(e.target.result);
            }
            reader.readAsDataURL(file);
          this.formData.set('imageOne', file, file.name);
          this.editProductForm.controls["imageOne"].setValue(file.name);
        }

      }
    }else{
      this.urls_imageOne.push('../../assets/img/4-3.png');
    }

  }

  normalProduct(p,v,d,pd,o){
    let timezone = "Asia/kolkata";
    var scheduleDate = moment(new Date(),timezone).format('DD-MM-YYYY');
    var scheduleTime = moment(new Date(),timezone).format('hh:mm A');

    // if(o == "YES"){
    //   this.errMessage = true;
    //   this.msg = "Product is already placed";
    //   return
    // }

    var data = {
      productId: p,
      vendorId: v,
      status: "ORDER",
      scheduleDate:scheduleDate,
      scheduleTime: scheduleTime,
      description: pd
    }
    if (d && d.editorInstance){
      data.description = d.editorInstance.getData()
    }

    this.userService.addAuctionProduct(data).subscribe((data)=>{
      this.spinner.show();
      if(data.statusCode == 200){
        this.product= data.data;
        this.spinner.hide();
        this.router.navigate(['products'],{ queryParams: { vendorId: v } });
        
      }
    },
    (err)=>{
     console.log(err);
     this.spinner.hide();
    })

  }

  auctionProduct(p,v,r,d,pd,o){
    let timezone = "Asia/kolkata";
    var scheduleDate = moment(r.selectedDateTime,timezone).format('DD-MM-YYYY');
    var scheduleTime = moment(r.selectedDateTime,timezone).format('hh:mm A')
    var selectedDate = moment(r.selectedDateTime,timezone).format();
    var currentDate = moment(new Date(), timezone).format();

    var difference = moment(selectedDate).diff(moment(currentDate), 'minutes');
    this.errMessage = false;
    if(difference < 60){
      this.errMessage = true;
      this.msg = "Schedule  date time must be 1 hour more"
      return
    }
    if(difference  == 0){
      this.errMessage = true;
      this.msg = "Please select schedule date and time"
      return
    }
    // if(o == "YES"){
    //   this.errMessage = true;
    //   this.msg = "Product is already placed";
    //   return
    // }
    var data = {
      productId: p,
      vendorId: v,
      scheduleDate: scheduleDate,
      scheduleTime: scheduleTime,
      status: "AUCTION",
      description: pd
    }
    if (d && d.editorInstance){
      data.description = d.editorInstance.getData()
    }

    this.userService.addAuctionProduct(data).subscribe((data)=>{
      if(data.statusCode == 200){
        this.product= data.data;
        this.router.navigate(['products'],{ queryParams: { vendorId: v } });
        
      }
    },
    (err)=>{
     console.log(err);
    })

  }

  get f() { return this.editProductForm.controls; }

  
  onSubmit() {
    debugger
    let timezone = "Asia/kolkata";
    var scheduleDate;
    var scheduleTime;

    this.submitted = true;
    this.auctionError = false;
    
    if(this.orderPlaced == "YES"){
      this.auctionError = true
      this.auctionMSg = "Product is already placed.";
      return;
    }
    if(this.type == "auction"){
      this.status = "AUCTION";
      if(this.editProductForm.value.scheduleTime == "" ){
        this.auctionError = true
        this.auctionMSg = "Please select schedule time for auction.";
        return;
      }
      if(this.editProductForm.value.duration == ""){
        this.auctionError = true;
        this.auctionMSg = "Please enter duration for auction.";
        return;
      }
       scheduleDate = moment(this.editProductForm.value.scheduleTime,timezone).format('DD-MM-YYYY');
       scheduleTime = moment(this.editProductForm.value.scheduleTime,timezone).format('hh:mm A');
    }
    if(this.type == "normal"){
      this.status = "ORDER";
      scheduleDate = moment(new Date(),timezone).format('DD-MM-YYYY');
      scheduleTime = moment(new Date(),timezone).format('hh:mm A');
      this.editProductForm.value.duration = 0;
    }

    console.log("==check ==check=====",this.editProductForm.value);

    if (this.editProductForm.value.description == "") { this.des_msg = true; return }
    // if (!this.isImageOne) {
    //   this.formData.set('imageOne', this.editProductForm.value.imageOne);
    // }
    // if (!this.isImageTwo) {
    //   this.formData.set('imageTwo', this.editProductForm.value.imageTwo);
    // }
    if (this.editProductForm.invalid) {
      return;
    } else {

      console.log("==== all values of the the>>>>>>>>>>>", this.editProductForm.value)

      this.formData.set('name', this.editProductForm.value.name);
      this.formData.set('price', this.editProductForm.value.price);
      this.formData.set('size', this.editProductForm.value.size);
      this.formData.set('quantity', this.editProductForm.value.quantity);
      this.formData.set('description', this.editProductForm.value.description);
      this.formData.set('duration', this.editProductForm.value.duration);
      this.formData.set('minimumPrice', this.editProductForm.value.minimumPrice);
      this.formData.set('maximumPrice', this.editProductForm.value.maximumPrice);
      this.formData.set('cleaningFish', this.editProductForm.value.cleaningFish);
      
      if(this.status){
        this.formData.set('status', this.status);
      }
      else{
        this.formData.set('status', this.auction ? 'AUCTION' : 'ORDER');
      }
      
      this.formData.set('scheduleDate', scheduleDate);
      this.formData.set('scheduleTime', scheduleTime);
      this.formData.set('productId', this.productId);
      this.formData.set('vendorId', localStorage.userId );
      this.formData.set('userType', 'admin');
      this.spinner.show();
      this.userService.addProduct(this.formData).subscribe((data) => {
        if (data.statusCode == 200) {
         
          this.router.navigate(['admin-products'], { queryParams: { vendorId: this.vendorId } });
        }
        this.spinner.hide();
      },
        (err) => {
          console.log(err);
          this.spinner.hide();
        })
    }
  }

  ChangeProductType(value){
    debugger
    this.auction = (value == 'Normal') ? false : true;
  }

}
