import {Component} from '@angular/core';
import {SwiperOptions} from "swiper/types";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  swiperConfig: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 3000
    }
  }
}
