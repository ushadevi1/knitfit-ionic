import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutpagePage } from './checkoutpage.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutpagePageRoutingModule {}
