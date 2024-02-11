import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router : Router){}
  goToProducts() {
    console.log("Trying to update database...");
    setTimeout(() => {
      console.log("Database is updated");
      this.router.navigate(['products']);
    }, 2000);
  }
}
