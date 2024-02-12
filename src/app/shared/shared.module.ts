import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import {RouterLink} from "@angular/router";
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    LogoComponent,
    NavLinkComponent,
    ButtonComponent
  ],
    exports: [
        LogoComponent,
        NavLinkComponent,
        ButtonComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ]
})
export class SharedModule { }
