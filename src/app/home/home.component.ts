import {Component, inject, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly titleService: Title = inject(Title);

  ngOnInit() {
    this.titleService.setTitle('Edu Africa - Home');
  }
}
