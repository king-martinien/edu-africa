import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    @if (show) {
      <div class="rounded-full border-[2px] border-white border-t-primary animate-spin"
           [ngClass]="{'w-5 h-5':size ==='sm'}"></div>
    }`,
})
export class LoaderComponent {
  @Input() size: "sm" | "md" | "lg" = "md";
  @Input() color: "primary" | "white" = "white";
  @Input() show: boolean = false;
}
