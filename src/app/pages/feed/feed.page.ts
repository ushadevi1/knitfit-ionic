import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  users: User[];
  private detailPage;

  constructor(public api:ApiService, public route:Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.api.getAllUsers().subscribe(data => {
      //alert(JSON.stringify(data.message));
      this.users = data.message;
    });
  }

  navigateToAdduserPage(){
    this.route.navigate(['user-add']);
  }

}
