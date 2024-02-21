import {Component, Input} from '@angular/core';
import {Testimonial} from "../../shared/interfaces/testimonial";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  @Input() testimonial!: Testimonial;
}
