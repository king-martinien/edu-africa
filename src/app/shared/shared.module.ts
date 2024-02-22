import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import {RouterLink} from "@angular/router";
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { ButtonComponent } from './components/button/button.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    LogoComponent,
    NavLinkComponent,
    ButtonComponent,
    LoaderComponent
  ],
  exports: [
    LogoComponent,
    NavLinkComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ]
})
export class SharedModule { }
