import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoubleDropdownComponent } from './double-dropdown/double-dropdown.component';

const routes: Routes = [
  {path:'' , component: DoubleDropdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
