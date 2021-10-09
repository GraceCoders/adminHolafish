import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from '../app.service';

@Component({
  selector: 'app-helpandfeedback',
  templateUrl: './helpandfeedback.component.html',
  styleUrls: ['./helpandfeedback.component.scss']
})
export class HelpandfeedbackComponent implements OnInit {

  Messages:any[] = [
    {UserName:'User 1',Mobile:123456788,Email:'email@gmail.com',Message:'this is a message',DateTime:new Date()},
    {UserName:'User 2',Mobile:123456788,Email:'email@gmail.com',Message:'this is a message',DateTime:new Date()},
    {UserName:'User 3',Mobile:123456788,Email:'email@gmail.com',Message:'this is a message',DateTime:new Date()}
  ];

  data = {
    page: 1,
    limit: '',
    text: '',
    storeId: localStorage.storeId,
    filter: ''
  }

  where = {
    filter: '',
    limit: 10,
    page: 1,
    order: -1
  }

  total = 0;
  catagoryId:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: AppService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  OpenAddStore() {

  }

  

  loadPage(page: number) {
    this.data.page = page;
  }

  editStore(catagory_id) {
    this.router.navigate(['edit-catagory'], { queryParams: { catagory_id: catagory_id } });
  }

  search(event) {
    this.data.filter = event.target.value;
  }

}
