import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from 'src/PrimeNG/primeNg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DoubleDropdownComponent } from './double-dropdown/double-dropdown.component';
import { DynamicAddingComponent } from './dynamic-adding/dynamic-adding.component';
import { TestPageComponent } from './test-page/test-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import {  HttpClientModule } from '@angular/common/http';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { SignupComponent } from './signup/signup.component';
import { InputDirective } from './input.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DoubleDropdownComponent,
    DynamicAddingComponent,
    TestPageComponent,
    NavbarComponent,
    BodyComponent,
    AssessmentPageComponent,
    ExamPageComponent,
    DemoComponent,
    ReactiveSignupComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
