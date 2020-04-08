import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
})
export class MyordersPage implements OnInit {

  project: Project[];
  private detailPage;

  constructor(public api:ApiService, public route:Router) { }

  ngOnInit() {
    this.getOrdersDate();
  }

  getOrdersDate(){
    this.api.getAllmyOrders().subscribe(data => {
      //console.log(data[0]);
      //alert(JSON.stringify(data));
      this.project = data;
    });
  }

}
