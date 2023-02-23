import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavlinkComponent } from './navlink/navlink.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { FormpageComponent } from './formpage/formpage.component';
import { CompanyformComponent } from './companyform/companyform.component';
import { InputImageComponent } from './input-image/input-image.component';
import { ApiFetcherComponent } from './api-fetcher/api-fetcher.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    HomeComponent,
    AboutUsComponent,
    NavlinkComponent,
    ProfileComponent,
    LoginComponent,
    FormpageComponent,
    CompanyformComponent,
    InputImageComponent,
    ApiFetcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
