import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import {CartButtonComponent} from './components/cart-button/cart-button.component';
import {SwiperDirective} from './directives/swiper/swiper.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartButtonComponent,
    SwiperDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SwiperDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
  ]
})
export class CoreModule {
}
