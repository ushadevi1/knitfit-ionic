import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutpagePageRoutingModule } from './checkoutpage-routing.module';

import { CheckoutpagePage } from './checkoutpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutpagePageRoutingModule
  ],
  declarations: [CheckoutpagePage]
})
export class CheckoutpagePageModule {}
