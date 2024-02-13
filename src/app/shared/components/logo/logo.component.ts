import {booleanAttribute, Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  template:
    `
      <a [routerLink]="['/']" class="relative flex"
         [ngClass]="{'w-32 h-7 md:w-40 md:h-9': hasMediaQuery, 'w-44 h-9': !hasMediaQuery}">
        <img [ngSrc]="logoUrl" alt="Edu Africa Logo" fill priority>
      </a>
    `
})
export class LogoComponent {
  @Input({transform: booleanAttribute}) hasMediaQuery = false;
  logoUrl = "assets/images/logo.png";
}
