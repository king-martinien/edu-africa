import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import {CartButtonComponent} from './components/cart-button/cart-button.component';
import {SwiperDirective} from './directives/swiper/swiper.directive';
import { AchievementSectionComponent } from './components/achievement-section/achievement-section.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartButtonComponent,
    SwiperDirective,
    AchievementSectionComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SwiperDirective,
    AchievementSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    NgOptimizedImage,
  ]
})
export class CoreModule {
}
