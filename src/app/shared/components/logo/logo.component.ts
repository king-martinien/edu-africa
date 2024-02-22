import {Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  template:
    `
      <a [routerLink]="['/']" class="relative flex">
        <img [ngSrc]="logoUrl" alt="Edu Africa Logo" [width]="140" [height]="90" priority>
      </a>
    `
})
export class LogoComponent {
  logoUrl = "assets/images/logo.png";
}
