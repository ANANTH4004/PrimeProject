import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DoubleDropdownComponent } from './double-dropdown/double-dropdown.component';
import { DynamicAddingComponent } from './dynamic-adding/dynamic-adding.component';

const routes: Routes = [
  {path:'' , component: DynamicAddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
