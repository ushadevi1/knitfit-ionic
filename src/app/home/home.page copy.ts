import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Account info',
      url: '/home/accountinfo'
    },
    {
      title: 'Address',
      url: '/home/address'
    },
    {
      title: 'My orders',
      url: '/home/myorders'
    },
    {
      title: 'Change Password',
      url: '/home/changepassword'
    }
  ];
  

  constructor(private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar) {
    this.initializeApp();
   }

   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
