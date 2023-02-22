import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  template: `
    <div class="max-w-md mx-auto border bg-slate-100 rounded-2xl p-4">
      <h2 class="text-2xl font-bold uppercase">Login</h2>
      <form
        class="gap-2 w-full max-w-full"
        [formGroup]="loginForm"
        (ngSubmit)="onSubmit()"
      >
        <div class="form-control my-4 w-full">
          <input
            type="text"
            placeholder="Username"
            class="input input-bordered input-primary w-full"
            formControlName="username"
          />
        </div>
        <div class="form-control my-4 w-full">
          <div class="input-group w-full">
            <input
              [type]="visible ? 'text' : 'password'"
              placeholder="Password"
              class="input input-primary input-bordered w-full"
              formControlName="password"
            />
            <button
              type="button"
              class="btn btn-primary btn-square text-2xl flex items-center"
              (click)="visible = !visible"
            >
              {{ visible ? '😆' : '😁' }}
            </button>
          </div>
        </div>
        <div class="mb-4 w-full">
          <button class="btn btn-primary btn-wide mx-auto block">Login</button>
        </div>
      </form>
    </div>
  `,
})
export class LoginComponent implements OnInit {
  visible: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private cookieService: CookieService, private router: Router) {}

  doLogin() {
    this.cookieService.set('loggedin', 'true');
  }

  ngOnInit() {
    if (this.cookieService.get('loggedin') === 'true') window.history.back();
  }

  onSubmit() {
    console.log('FORM SUBMITTED: ', this.loginForm.value);
    if (this.loginForm.value.username && this.loginForm.value.password) {
      console.log('VALUE COMPLETE');
      this.doLogin();
      this.cookieService.set('loginInfo', JSON.stringify(this.loginForm.value));
      window.location.href = decodeURIComponent(
        window.location.search.slice(6)
      );
    }
  }
}
