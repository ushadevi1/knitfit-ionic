import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  navigate : any;
  //public selectedIndex = 0;
  constructor(private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar) {
    
    this.initializeApp();
   }

   ngOnInit(){
    this.sideMenu();
   }

   initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   }
    
  sideMenu()
  {
    this.navigate =
    [
      {
        title: 'Shop Pattern',
        url: '/home/shoppattern'
      },
      {
        title: 'My Wishlist',
        url: '/home/mywishlist'
      },
      {
        title: 'Checkout',
        url: '/home/checkoutpage'
      },
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
    ]
  }


}
