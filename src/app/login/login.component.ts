import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  visible: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', Validators.required),
  });

  constructor(private cookieService: CookieService, private router: Router) {}

  doLogin() {
    this.cookieService.set('loggedin', 'true');
  }

  ngOnInit() {
    if (this.cookieService.get('loggedin') === 'true') window.history.back();
  }

  getField(name: string) {
    const field = this.loginForm.get(name);
    if (field?.status === 'INVALID' && field.touched) return field.errors;
    return false;
  }

  get usernameError() {
    return this.getField('username');
  }

  get passwordError() {
    return this.getField('password');
  }

  onSubmit() {
    const { value } = this.loginForm;
    const { username, password } = value;
    if (username && password) {
      console.log('VALUE COMPLETE');
      this.doLogin();
      this.cookieService.set('loginInfo', JSON.stringify(value));
      window.location.href = decodeURIComponent(
        window.location.search.slice(6)
      );
    }
  }
}
