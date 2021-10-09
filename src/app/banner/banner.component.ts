import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  banners = [];
  bannerForm: FormGroup;
  submitted = false;
  errMssage = false;
  isBanner = false;
  bannerimage = false;
  urls_banner =[];
  msg = ""
  formData = new FormData();
 
 size = ''
 pagination = false;
 total = 0;
  data = {
    page : 1,
    limit: '',
    filter: '',
    text: ''
  }
  where = {
    filter: '',
		limit: 10,
    page: 1,
    order: -1
	}

  constructor( 
               private formBuilder: FormBuilder,
               private router: Router, 
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
    this.bannerForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
  });
    this.getbanners(this.data);
    this.urls_banner.push('../../assets/img/4-3.png');
  }

  getbanners(data){
    this.spinner.show();
    this.userService.getbanners(data).subscribe((data)=>{
      if(data.statusCode == 200){
        this.banners = data.data.banners;
        console.log("==list provuders =======",this.banners);
        this.total = data.data.total
        this.spinner.hide();
      }
    },
    (err)=>{
      console.log(err);
      this.spinner.hide();
    })
  }

  fileUploadBanner(event) {
    let files = event.target.files;
    this.isBanner = true;
    this.urls_banner = [];
    if (files) {
      for (let file of files) {
        var ext = file.name.match(/\.(.+)$/)[1];
        if (ext.toLowerCase() === 'jpg' ||
          ext.toLowerCase() === 'jpeg' ||
          ext.toLowerCase() === 'png' ||
          ext.toLowerCase() === 'webp') {
            let reader = new FileReader();
            reader.onload = (e: any) => {
              this.urls_banner.push(e.target.result);
            }
            reader.readAsDataURL(file);
          this.formData.set('bannerImage', file, file.name);
        }

      }
    }else{
      this.urls_banner.push('../../assets/img/4-3.png');
    }

  }

  deleteBanner(bannerId,index){
    var consent = confirm("Do you want to delete this provider ?");
    if(consent){
    this.userService.deleteBanner({ bannerId:bannerId}).subscribe((data)=>{
      if(data.statusCode == 200){
        this.banners.splice(index,1);
      }
    })
    }
  }


  loadPage(page: number) {
   this.data.page = page;
   this.getbanners(this.data);
  }
  search(event){
    this.data. filter = event.target.value;
    this.getbanners(this.data)
  }

  // convenience getter for easy access to form fields
  get f() { return this.bannerForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log("===chekc enkkggg",this.bannerForm.value)
      // stop here if form is invalid
      if (this.bannerForm.invalid) {
          return;
      }
      this.formData.set('title', this.bannerForm.value.title);
      this.formData.set('description', this.bannerForm.value.description);

      this.errMssage = false;
      this.spinner.show();
      this.userService.addBanner(this.formData).subscribe((data)=>{
        console.log("=== resposnse of daat data====",data)
        if(data.statusCode == 200){
          window.location.reload();
        }
        if(data.statusCode == 400){
          this.spinner.hide();
          this.errMssage = true;
          this.msg = data.message;
        }
      },
      (err)=>{
        console.log(err);
        this.spinner.hide();
      })

  }
}
