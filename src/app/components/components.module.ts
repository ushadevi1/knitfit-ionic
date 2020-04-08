import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [SlidesComponent,LogoComponent,StartComponent,HeaderComponent],
  exports:[SlidesComponent,LogoComponent,StartComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
