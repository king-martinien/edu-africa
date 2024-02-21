import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SwiperOptions} from "swiper/types";
import {Testimonial} from "../shared/interfaces/testimonial";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly titleService: Title = inject(Title);

  swiperConfig: SwiperOptions = {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 20,
    slideActiveClass: 'pagination-active',
  };

  testimonials: WritableSignal<Testimonial[]> = signal<Testimonial[]>([]);


  ngOnInit() {
    this.titleService.setTitle('Edu Africa - Home');
    this.testimonials.set([
      {
        content: 'I am so, so happy with the service I received from Edu Africa. I have been trying to get my child into a good school for a while now and I am so happy I found Edu Africa. They made the process so easy and I am so happy with the school my child is in now.',
        user: {
          name: 'John Doe',
          category: 'Parent',
          image: 'https://via.placeholder.com/150'
        }
      },
      {
        content: 'The service I received from Edu Africa was amazing. I was able to get my child into a good school in no time. I am so happy with the service I received and I would recommend Edu Africa to anyone.',
        user: {
          name: 'Arthur Brooklyn',
          category: '3D Modeling',
          image: 'https://via.placeholder.com/150'
        }
      },
      {
        content: 'I am so happy with the service I received from Edu Africa. I was able to get my child into a good school in no time. I am so happy with the service I received and I would recommend Edu Africa to anyone.',
        user: {
          name: 'John Doe',
          category: 'Parent',
          image: 'https://via.placeholder.com/150'
        }
      },
      {
        content: 'I am so happy with the service I received from Edu Africa. I was able to get my child into a good school in no time. I am so happy with the service I received and I would recommend Edu Africa to anyone.',
        user: {
          name: 'John Doe',
          category: 'Parent',
          image: 'https://via.placeholder.com/150'
        }
      },
      {
        content: 'I am so happy with the service I received from Edu Africa. I was able to get my child into a good school in no time. I am so happy with the service I received and I would recommend Edu Africa to anyone.',
        user: {
          name: 'John Doe',
          category: 'Parent',
          image: 'https://via.placeholder.com/150'
        }
      },
    ]);
  }
}
