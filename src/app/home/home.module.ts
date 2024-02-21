import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from "../shared/shared.module";
import { TestimonialComponent } from './testimonial/testimonial.component';
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    HomeComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgOptimizedImage,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
