import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import { CartButtonComponent } from './components/cart-button/cart-button.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
  ]
})
export class CoreModule {
}
