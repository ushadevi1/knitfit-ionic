import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HomeRouter } from './home.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouter,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
