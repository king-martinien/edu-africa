import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    NgOptimizedImage,
    CoreModule,
    SharedModule
  ]
})
export class AboutUsModule { }
