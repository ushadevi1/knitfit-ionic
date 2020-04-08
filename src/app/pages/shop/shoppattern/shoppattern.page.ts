import { Component, OnInit } from '@angular/core';
///import {Http,Response,Headers} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project';



@Component({
  selector: 'app-shoppattern',
  templateUrl: './shoppattern.page.html',
  styleUrls: ['./shoppattern.page.scss'],
})
export class ShoppatternPage implements OnInit {

  project: Project[];
  private detailPage;

  constructor(private http:HttpClientModule,public api:ApiService, public route:Router) { }

  ngOnInit() {
    this.getShoppatternDate();
  }

  getShoppatternDate(){
    this.api.getAllShoppattern().subscribe(data => {
      //console.log(data[0]);
      //alert(JSON.stringify(data));
      this.project = data;
    });
  }

}
