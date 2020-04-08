import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.page.html',
  styleUrls: ['./mywishlist.page.scss'],
})
export class MywishlistPage implements OnInit {

  project: Project[];
  private detailPage;

  constructor(public api:ApiService, public route:Router) { }

  ngOnInit() {
    this.getWishlistDate();
  }

  getWishlistDate(){
    this.api.getAllWishlist().subscribe(data => {
      //console.log(data[0]);
      //alert(JSON.stringify(data));
      this.project = data;
    });
  }

}
