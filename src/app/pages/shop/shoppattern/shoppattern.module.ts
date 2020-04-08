import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppatternPageRoutingModule } from './shoppattern-routing.module';

import { ShoppatternPage } from './shoppattern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppatternPageRoutingModule
  ],
  declarations: [ShoppatternPage]
})
export class ShoppatternPageModule {}
