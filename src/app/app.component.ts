import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly _router: Router = inject(Router);

  title = 'edu-africa';
  isAuthPage: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isAuthPage.set(event.url.includes('auth'));
      }
    });
  }

}
