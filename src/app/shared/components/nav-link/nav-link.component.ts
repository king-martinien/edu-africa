import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-link',
  template:
    `
      <a [routerLink]="to"
         [class]="customClass"
         class="hover:from-primary-400 hover:to-primary"
         [ngClass]="{'md:hover:text-primary': !isColor, 'text-gradient-primary':isColor}"
         [innerHTML]="case==='UPPER'? (label|uppercase): case === 'TITLE' ? (label|titlecase) : label">
      </a>
    `
})
export class NavLinkComponent {
  @Input() to = "home";
  @Input() label = "";
  @Input() case: "LOWER" | "UPPER" | "TITLE" = "TITLE";
  @Input() isColor = false;
  @Input() customClass = ""
}
