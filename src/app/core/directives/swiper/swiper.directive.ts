import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {SwiperOptions} from "swiper/types";

@Directive({
  selector: '[appSwiper]'
})
export class SwiperDirective implements AfterViewInit {
  @Input('config')
  config?: SwiperOptions;

  constructor(private element: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit(): void {
    Object.assign(this.element.nativeElement, this.config);
    // @ts-ignore
    this.element.nativeElement.initialize();
  }

}
