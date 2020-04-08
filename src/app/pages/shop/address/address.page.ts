import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  project: Project[];
  private detailPage;

  constructor(public api:ApiService, public route:Router) { }

  ngOnInit() {
    this.getAddressbookDate();
  }

  getAddressbookDate(){
    this.api.getAddressBookData().subscribe(data => {
      //console.log(data[0]);
      //alert(JSON.stringify(data));
      this.project = data;
    });
  }

}
