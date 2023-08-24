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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DoubleDropdownComponent,
    DynamicAddingComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
