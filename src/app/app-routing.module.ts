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

const routes: Routes = [
  {path:'' , redirectTo: 'dashboard',pathMatch:'full'},
  {path:'dashboard' , component: AssessmentPageComponent},
  {path:'signup' , component: SignUpComponent},
  {path:'login' , component: LoginComponent},
  {path:'double' , component: DoubleDropdownComponent},
  {path:'dynamic' , component: DynamicAddingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
