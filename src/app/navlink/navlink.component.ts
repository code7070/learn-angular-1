import { Component, Input, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navlink',
  styleUrls: ['./navlink.component.css'],
  template: `
    <a
      [routerLink]="href"
      [class]="classBtn"
      [ngClass]="href === this.currentPath ? 'btn-outline' : model"
    >
      {{ text }}
    </a>
  `,
})
export class NavlinkComponent implements OnDestroy {
  @Input() text: string = '';
  @Input() href: string = '';
  @Input() model: string = 'btn-secondary';
  @Input() classBtn: string = `btn btn-sm ${this.model}`;

  events;
  public currentPath: string = '';

  constructor(private router: Router) {
    this.events = router.events.subscribe((evt: Event) => {
      if (evt instanceof NavigationEnd) this.currentPath = evt.url;
    });
  }

  ngOnDestroy() {
    this.events.unsubscribe();
  }
}
