import {AfterViewInit, ChangeDetectorRef, Component, inject, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  template:
    `
      <button [class]="defaultClass" *ngIf="type==='button';else link" [innerHTML]="label"></button>
      <ng-template #link>
        <a [class]="defaultClass" [routerLink]="to" [innerHTML]="label">{{ label }}</a>
      </ng-template>
    `
})
export class ButtonComponent implements AfterViewInit {
  private readonly cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() label = "";
  @Input() type: "button" | "link" = "button";
  @Input() to = "home";
  @Input() color: "white" | "primary" = "primary";
  defaultClass = 'inline-block text-center px-6 py-3 rounded-full font-bold min-w-[120px] shadow-primary-400/10 shadow-btn'


  ngAfterViewInit() {
    this.defaultClass +=
      this.color === 'primary'
        ? " bg-gradient-to-r from-primary to-primary-400 text-white"
        : " bg-white border border-primary-400 text-primary-400";
    this.cdRef.detectChanges()
  }

}
