import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerBannerComponent } from './inner-banner/inner-banner.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    InnerBannerComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    InnerBannerComponent
  ]
})
export class SharedModule { }
