import { Component, OnDestroy } from '@angular/core';
import {
  Router,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  events;
  public currentPath: string = '';

  constructor(private router: Router) {
    console.log('router url', router.url);
    this.events = router.events.subscribe((evt: NavigationEvent) => {
      if (evt instanceof NavigationEnd) {
        this.currentPath = evt.url;
        console.log('event subscribed: ', evt);
      }
    });
  }

  ngOnDestroy() {
    this.events.unsubscribe();
  }

  title = 'app2';
  linkList = [
    { path: '/', text: 'Home' },
    { path: '/about-us', text: 'About us' },
    { path: '/profile', text: 'Profile' },
    { path: '/form', text: 'Form' },
  ];
}
