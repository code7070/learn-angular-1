import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  styleUrls: ['./profile.component.css'],
  template: `
    <div *ngIf="isLogin" class="container">
      <div>Profile exist</div>
      <div>{{ userInfo }}</div>
      <button class="btn btn-sm btn-danger" (click)="doLogout()">Logout</button>
    </div>
    <div *ngIf="!isLogin" class="container">Waiting...</div>
  `,
})
export class ProfileComponent implements OnInit {
  isLogin: boolean = false;
  userInfo: string = '';

  // constructor(private cookieService: CookieService, router: Router ) {}
  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    this.isLogin = this.cookieService.get('loggedin') === 'true';
    if (!this.isLogin) window.location.href = '/login?from=/profile';
    else {
      this.userInfo = this.cookieService.get('loginInfo');
    }
  }

  doLogout() {
    this.cookieService.delete('loggedin');
    this.cookieService.delete('loginInfo');
    alert("You're logout");
    window.location.href = '/';
  }
}
