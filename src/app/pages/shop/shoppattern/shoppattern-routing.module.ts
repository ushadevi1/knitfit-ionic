import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppatternPage } from './shoppattern.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppatternPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppatternPageRoutingModule {}
