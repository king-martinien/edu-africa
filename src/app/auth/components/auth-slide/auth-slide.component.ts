import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-auth-slide',
  templateUrl: './auth-slide.component.html',
  styleUrl: './auth-slide.component.scss'
})
export class AuthSlideComponent {
  @Input() imageUrl!: string;
  @Input() text!: string;
}
