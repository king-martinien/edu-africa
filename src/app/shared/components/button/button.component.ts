import {AfterViewInit, ChangeDetectorRef, Component, inject, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  template:
    `
      @if (type === 'button') {
        <button [class]="customClass" [ngClass]="defaultClass" [innerHTML]="label"></button>
      } @else {
        <a [class]="customClass" [ngClass]="defaultClass" [routerLink]="to" [innerHTML]="label">{{ label }}</a>
      }
    `
})
export class ButtonComponent implements AfterViewInit {
  private readonly cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() label = "";
  @Input() type: "button" | "link" = "button";
  @Input() to = "home";
  @Input() color: "white" | "primary" = "primary";
  @Input() customClass = "";
  defaultClass = 'inline-block text-center px-6 py-3 rounded-full font-bold min-w-[150px] shadow-primary-400/10 shadow-btn'


  ngAfterViewInit() {
    this.defaultClass +=
      this.color === 'primary'
        ? " bg-gradient-to-r from-primary to-primary-400 text-white"
        : " bg-white text-primary";
    this.cdRef.detectChanges()
  }

}
