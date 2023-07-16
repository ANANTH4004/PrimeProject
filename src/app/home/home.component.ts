import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName !: String
  sidebarVisible : boolean = false;

  options : string[] = ["Home" , "Portfolio" , "Expense"];
}
