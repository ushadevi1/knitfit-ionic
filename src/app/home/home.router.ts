import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
        {
            path:'feed',
            loadChildren:() =>
            import('../pages/feed/feed.module').then(
                m=>m.FeedPageModule
            )
        },
        {
            path:'user-add',
            loadChildren:() =>
            import('../pages/user-add/user-add.module').then(
                m=>m.UserAddPageModule
            )
        },
        {
            path:'notifications',
            loadChildren:() =>
            import('../pages/notifications/notifications.module').then(
                m=>m.NotificationsPageModule
            )
        },
        {
            path:'messages',
            loadChildren:() =>
            import('../pages/messages/messages.module').then(
                m=>m.MessagesPageModule
            )
        },
        {
            path:'settings',
            loadChildren:() =>
            import('../pages/settings/settings.module').then(
                m=>m.SettingsPageModule
            )
        },
        {
            path: 'changepassword',
            loadChildren: () => import('../pages/changepassword/changepassword.module').then( 
                m => m.ChangepasswordPageModule
            )
        },
        {
            path: 'accountinfo',
            loadChildren: () => import('../pages/shop/accountinfo/accountinfo.module').then( 
                m => m.AccountinfoPageModule
            )
        },
        {
            path: 'address',
            loadChildren: () => import('../pages/shop/address/address.module').then( 
                m => m.AddressPageModule
            )
        },
        {
            path: 'myorders',
            loadChildren: () => import('../pages/shop/myorders/myorders.module').then( 
                m => m.MyordersPageModule
            )
        },
        {
            path: 'shoppattern',
            loadChildren: () => import('../pages/shop/shoppattern/shoppattern.module').then(
                 m => m.ShoppatternPageModule
            )
        },
        {
            path: 'productdetailpage',
            loadChildren: () => import('../pages/shop/productdetailpage/productdetailpage.module').then
            ( 
                m => m.ProductdetailpagePageModule
            )
        },
        {
          path: 'mywishlist',
          loadChildren: () => import('../pages/shop/mywishlist/mywishlist.module').then( 
              m => m.MywishlistPageModule
            )
        },
        {
          path: 'checkoutpage',
          loadChildren: () => import('../pages/shop/checkoutpage/checkoutpage.module').then( 
              m => m.CheckoutpagePageModule
            )
        }
    ]
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRouter {}