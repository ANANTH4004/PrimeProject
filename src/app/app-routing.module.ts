import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoubleDropdownComponent } from './double-dropdown/double-dropdown.component';
import { DynamicAddingComponent } from './dynamic-adding/dynamic-adding.component';
import { TestPageComponent } from './test-page/test-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'' , redirectTo: 'dashboard',pathMatch:'full'},
  {path:'dashboard' , component: DemoComponent},
  {path:'signup' , component: SignupComponent},
  {path:'login' , component: LoginComponent},
  {path:'double' , component: DoubleDropdownComponent},
  {path:'dynamic' , component: SignupComponent},
  {path:'reactivesignup' , component: ReactiveSignupComponent},

];

const demoroutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(demoroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
